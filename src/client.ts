// dsh-web-skin client bundle —— 六合一皮肤包（极简灰/粗野主义/莫兰迪/像素/Solarized/Dracula）。
// ⚠️ 本文件（lib/client.js）由 tsc + tools/build.mjs 生成，请勿手改；源码在 src/client.ts，
// 改色去 palettes/*.mjs，然后 npm run build。
//
// 机制：
//   · 调色板经 ctx.theme.overrideTokens(PLUGIN_ID, tokens) 叠加到官方主题上，
//     换肤 = 同一 source 再覆盖一次（主题服务保证旧层被替换），停用插件即还原；
//   · 皮肤选择持久化在 localStorage（dsh-web-skin:skin），首帧引导色由 Host 侧
//     lib/index.js 注入的启动脚本读取同一 key 决定；
//   · 设置行挂在官方 settings.general.item 槽位（设置 → 通用），
//     React / defineStore 由客户端 ModuleLoader 共享注入，本包运行时零依赖。

/** ModuleLoader 的 CommonJS 风格 require：本包只用 react 与 dsh-client-store。 */
type ModuleRequire = {
	(id: "react"): typeof import("react");
	(id: "@deepseek-ai/dsh-client-store"): typeof import("@deepseek-ai/dsh-client-store");
};

/** 一个 ModuleLoader 模块定义（id + CommonJS 风格 factory）。 */
interface ModuleLoaderDefinition {
	id: string;
	factory: (require: ModuleRequire) => unknown;
}

interface Window {
	__ModuleLoader__: {
		load(definition: ModuleLoaderDefinition): void;
	};
}

/** 客户端拿到的皮肤数据（调色板的客户端子集：不含 name/brandTextDark）。 */
interface ClientSkin {
	id: string;
	swatch: [string, string];
	selection: { light: string; dark: string };
	tokens: import("../palettes/index.js").SkinTokens;
}

/** 换肤 store 的状态形状。 */
interface SkinState {
	current: string;
}

/** 换肤 store 的 baked 动作面（框架把 draft 绑掉之后交给 inject 的形状）。 */
interface SkinActions {
	select(id: string): void;
}

/** 换肤行组件的 props：框架注入的 useStore / t，加上 inject 出来的 selectSkin。 */
interface SkinRowProps {
	useStore: <S>(sel: (state: SkinState) => S) => S;
	t: (key: string) => string;
	selectSkin: (id: string) => void;
}

/** 皮肤名词典（zh/en 两份，键为 skin.*）。 */
type SkinDict = Record<"zh" | "en", Record<string, string>>;

/** 客户端上下文的最小面：effect + locale/theme/slots 三个注入服务。 */
interface SkinClientContext {
	effect(fn: () => void | (() => void), label: string): () => void;
	locale: {
		register(ns: string, dict: SkinDict): () => void;
	};
	theme: {
		overrideTokens(source: string, tokens: import("../palettes/index.js").SkinTokens): () => void;
	};
	slots: {
		inject(name: string, callback: () => unknown): unknown;
		register(definition: {
			name: string;
			id: string;
			order: number;
			store: unknown;
			locale: string;
			inject: (actions: SkinActions) => { selectSkin: (id: string) => void };
		}, component: unknown): unknown;
	};
}

window.__ModuleLoader__.load({ id: "dsh-web-skin", factory: (require) => {

	var module = { exports: {} as Record<string, unknown> };
	var exports = module.exports;
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

	const React = require("react");
	const { defineStore } = require("@deepseek-ai/dsh-client-store");

	const PLUGIN_ID = "dsh-web-skin";
	const STORAGE_KEY = "dsh-web-skin:skin";
	const DEFAULT_SKIN = "minimal";
	const NS = "dsh-web-skin";
	const inject = ["slots", "locale", "theme"];

	/** 样式层总开关。false = 只剩纯调色板（选区/过渡/光标色不装）。 */
	const ENABLE_CSS_LAYER = true;

	const SKIN_ORDER = "@dsh-web-skin/inject:SKIN_ORDER" as unknown as string[];
	const SKINS = "@dsh-web-skin/inject:SKINS" as unknown as Record<string, ClientSkin>;
	const DICT = "@dsh-web-skin/inject:DICT" as unknown as SkinDict;

	function readSkin() {
		try {
			const v = localStorage.getItem(STORAGE_KEY) as string;
			return SKINS[v] ? v : DEFAULT_SKIN;
		} catch (e) {
			return DEFAULT_SKIN;
		}
	}
	function persistSkin(id: string) {
		try { localStorage.setItem(STORAGE_KEY, id); } catch (e) { /* 隐私模式算了 */ }
	}

	/** 样式层：选区跟随皮肤，其余三条是固定兜底（见底部设计约束）。 */
	function buildCss(skin: ClientSkin) {
		return [
			skin.selection.light,
			skin.selection.dark,
			":where(*){transition:" +
				"background-color .18s cubic-bezier(.25,.46,.45,.94)," +
				"border-color .18s cubic-bezier(.25,.46,.45,.94)," +
				"color .18s cubic-bezier(.25,.46,.45,.94)," +
				"fill .18s cubic-bezier(.25,.46,.45,.94)," +
				"stroke .18s cubic-bezier(.25,.46,.45,.94)," +
				"opacity .18s cubic-bezier(.25,.46,.45,.94)}",
			":where([data-composer-input],input,textarea){caret-color:var(--dsw-alias-state-business-primary)}",
			"@media (prefers-reduced-motion:reduce){:where(*){transition:none;animation:none}}",
		].join("");
	}

	/**
	 * 设置页换肤行（设置 → 通用 → 界面皮肤）。
	 * 六个色块按钮，点击即换：localStorage 持久化 + store 驱动重渲染 +
	 * overrideTokens 同 source 覆盖换层，无需刷新。
	 */
	function SkinRow(props: SkinRowProps) {
		const current = props.useStore((s) => s.current);
		const t = props.t;
		const h = React.createElement;
		return h("div", { style: { display: "flex", flexDirection: "column", gap: "10px" } },
			h("div", { style: { fontSize: "14px", fontWeight: 500, color: "var(--dsw-alias-label-primary)" } }, t("skin.title")),
			h("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" } },
				SKIN_ORDER.map((id) => {
					const skin = SKINS[id];
					const active = current === id;
					return h("button", {
						key: id,
						type: "button",
						"aria-pressed": active,
						onClick: () => props.selectSkin(id),
						style: {
							display: "inline-flex", alignItems: "center", gap: "8px",
							padding: "6px 12px 6px 8px", borderRadius: "10px", cursor: "pointer",
							fontSize: "13px", fontFamily: "inherit",
							color: "var(--dsw-alias-label-primary)",
							background: active ? "var(--dsw-alias-interactive-bg-hover)" : "transparent",
							border: "1px solid " + (active ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-border-l2)"),
						},
					},
						h("span", {
							style: {
								width: "18px", height: "18px", borderRadius: "50%", flex: "none",
								background: "linear-gradient(135deg, " + skin.swatch[0] + " 50%, " + skin.swatch[1] + " 50%)",
								border: "1px solid var(--dsw-alias-border-l2)",
							},
						}),
						t("skin." + id),
					);
				}),
			),
		);
	}

	function apply(ctx: SkinClientContext) {
		ctx.effect(() => ctx.locale.register(NS, DICT), "dsh-web-skin: locale");

		let disposePalette: (() => void) | null = null;
		let styleTag: HTMLStyleElement | null = null;

		function applyPalette(id: string) {
			const skin = SKINS[id] || SKINS[DEFAULT_SKIN];
			if (disposePalette) { try { disposePalette(); } catch (e) {} disposePalette = null; }
			disposePalette = ctx.theme.overrideTokens(PLUGIN_ID, skin.tokens);
			if (ENABLE_CSS_LAYER && typeof document !== "undefined") {
				if (!styleTag) {
					styleTag = document.createElement("style");
					styleTag.dataset.plugin = PLUGIN_ID;
					styleTag.dataset.pluginCss = PLUGIN_ID + "/skin.css";
					document.head.appendChild(styleTag);
				}
				styleTag.textContent = buildCss(skin);
			}
		}

		ctx.effect(() => {
			applyPalette(readSkin());
			return () => {
				if (disposePalette) { try { disposePalette(); } catch (e) {} }
				if (styleTag) { styleTag.remove(); styleTag = null; }
			};
		}, "dsh-web-skin: palette");

		// 设置行属于锦上添花：槽位 API 变动也不影响换肤本体。
		try {
			const store = defineStore({
				init: () => ({ current: readSkin() }),
				actions: { select: (d, id) => { d.current = id; } },
			});
			const injected = (actions: SkinActions) => {
				actions.select(readSkin());
				return {
					selectSkin: (id: string) => {
						if (!SKINS[id]) return;
						persistSkin(id);
						actions.select(id);
						applyPalette(id);
					},
				};
			};
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "dsh-web-skin",
				order: 1000,
				store,
				locale: NS,
				inject: injected,
			}, SkinRow));
		} catch (err) {
			console.warn("[dsh-web-skin] 设置行挂载失败（皮肤本身不受影响）:", err);
		}
	}

	exports.apply = apply;
	exports.inject = inject;
	return module.exports;
}});
