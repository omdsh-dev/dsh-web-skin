#!/usr/bin/env node
/**
 * dsh-web-skin 构建器：palettes/*.mjs（唯一事实源）→ lib/client.js + lib/index.js
 *
 * 用法：npm run build（改完调色板必跑，随后 npm run check 校验）
 *
 * 产物是零依赖静态文件：运行时不需要本构建器。
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const palettesDir = join(root, 'palettes')

// ── 读取全部调色板 ─────────────────────────────────────────────────────────
const SKIN_ORDER = ['minimal', 'brutalism', 'morandi', 'pixel', 'solarized', 'dracula']
const skins = {}
for (const file of readdirSync(palettesDir)) {
	if (!file.endsWith('.mjs')) continue
	const mod = await import(pathToFileURL(join(palettesDir, file)).href)
	const skin = mod.default
	if (!skin?.id || !skin.tokens) throw new Error(`${file} 不是合法的调色板`)
	skins[skin.id] = skin
}
for (const id of SKIN_ORDER) {
	if (!skins[id]) throw new Error(`缺少调色板：palettes/${id}.mjs`)
}

const DEFAULT_SKIN = 'minimal'
const STORAGE_KEY = 'dsh-web-skin:skin'
const bootTable = Object.fromEntries(
	SKIN_ORDER.map((id) => [id, [skins[id].tokens['--dsw-alias-bg-base'].light, skins[id].tokens['--dsw-alias-bg-base'].dark]]),
)
const FALLBACK = bootTable[DEFAULT_SKIN]

// 客户端需要的皮肤数据（brandTextDark 仅自检用，不进客户端）
const clientSkins = Object.fromEntries(
	SKIN_ORDER.map((id) => [id, {
		id,
		swatch: skins[id].swatch,
		selection: skins[id].selection,
		tokens: skins[id].tokens,
	}]),
)
const dict = {
	zh: Object.fromEntries([['skin.title', '界面皮肤'], ...SKIN_ORDER.map((id) => [`skin.${id}`, skins[id].name.zh])]),
	en: Object.fromEntries([['skin.title', 'Interface skin'], ...SKIN_ORDER.map((id) => [`skin.${id}`, skins[id].name.en])]),
}

// ── lib/client.js ──────────────────────────────────────────────────────────
const clientJs = `// dsh-web-skin client bundle —— 六合一皮肤包（极简灰/粗野主义/莫兰迪/像素/Solarized/Dracula）。
// ⚠️ 本文件由 tools/build.mjs 生成，请勿手改；改色去 palettes/*.mjs，然后 npm run build。
//
// 机制：
//   · 调色板经 ctx.theme.overrideTokens(PLUGIN_ID, tokens) 叠加到官方主题上，
//     换肤 = 同一 source 再覆盖一次（主题服务保证旧层被替换），停用插件即还原；
//   · 皮肤选择持久化在 localStorage（${STORAGE_KEY}），首帧引导色由 Host 侧
//     lib/index.js 注入的启动脚本读取同一 key 决定；
//   · 设置行挂在官方 settings.general.item 槽位（设置 → 通用），
//     React / defineStore 由客户端 ModuleLoader 共享注入，本包零构建零依赖。
window.__ModuleLoader__.load({ id: "dsh-web-skin", factory: (require) => {

	var module = { exports: {} };
	var exports = module.exports;
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

	const React = require("react");
	const { defineStore } = require("@deepseek-ai/dsh-client-store");

	const PLUGIN_ID = "dsh-web-skin";
	const STORAGE_KEY = ${JSON.stringify(STORAGE_KEY)};
	const DEFAULT_SKIN = ${JSON.stringify(DEFAULT_SKIN)};
	const NS = "dsh-web-skin";
	const inject = ["slots", "locale", "theme"];

	/** 样式层总开关。false = 只剩纯调色板（选区/过渡/光标色不装）。 */
	const ENABLE_CSS_LAYER = true;

	const SKIN_ORDER = ${JSON.stringify(SKIN_ORDER)};
	const SKINS = ${JSON.stringify(clientSkins)};
	const DICT = ${JSON.stringify(dict)};

	function readSkin() {
		try {
			const v = localStorage.getItem(STORAGE_KEY);
			return SKINS[v] ? v : DEFAULT_SKIN;
		} catch (e) {
			return DEFAULT_SKIN;
		}
	}
	function persistSkin(id) {
		try { localStorage.setItem(STORAGE_KEY, id); } catch (e) { /* 隐私模式算了 */ }
	}

	/** 样式层：选区跟随皮肤，其余三条是固定兜底（见底部设计约束）。 */
	function buildCss(skin) {
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
	function SkinRow(props) {
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

	function apply(ctx) {
		ctx.effect(() => ctx.locale.register(NS, DICT), "dsh-web-skin: locale");

		let disposePalette = null;
		let styleTag = null;

		function applyPalette(id) {
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
			const injected = (actions) => {
				actions.select(readSkin());
				return {
					selectSkin: (id) => {
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
`
writeFileSync(join(root, 'lib', 'client.js'), clientJs)

// ── lib/index.js ───────────────────────────────────────────────────────────
const bootScript = `"(function(){try{var table=" + JSON.stringify(BOOT_SKINS) + ";var id=localStorage.getItem(" + JSON.stringify(STORAGE_KEY) + ")||" + JSON.stringify(DEFAULT_SKIN) + ";var bg=table[id]||table[" + JSON.stringify(DEFAULT_SKIN) + "];var r=document.documentElement.style;r.setProperty('--dsws-boot-l',bg[0]);r.setProperty('--dsws-boot-d',bg[1]);}catch(e){}})();"`

const L = FALLBACK[0], D = FALLBACK[1]
const bootCss = [
	`body{background-color:var(--dsws-boot-l,${L});--dsh-boot-bg:var(--dsws-boot-l,${L})}`,
	`@media (prefers-color-scheme:dark){body:not([data-ds-dark-theme]){background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}}`,
	`html[data-ds-theme-source="light"] body,html[data-ds-theme-source="system"] body{background-color:var(--dsws-boot-l,${L});--dsh-boot-bg:var(--dsws-boot-l,${L})}`,
	`html[data-ds-theme-source="dark"] body{background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}`,
	`@media (prefers-color-scheme:dark){html[data-ds-theme-source="system"] body{background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}}`,
	`body[data-ds-dark-theme]{background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}`,
].join('')

const indexJs = `/**
 * dsh-web-skin host entry（Host 侧）。
 * ⚠️ 本文件由 tools/build.mjs 生成，请勿手改（npm run build）。
 *
 * 皮肤本体在客户端（lib/client.js）。Host 侧负责"首帧不闪"：
 *   ① script 行（head、解析阻塞）：读 localStorage 里的皮肤选择，把该皮肤的
 *      画布色写到 documentElement 的两个 CSS 变量上；
 *   ② style 行：与官方 ui-theme 引导样式同结构的六条规则，颜色引用这两个变量
 *      （回退值 = 默认皮肤 ${DEFAULT_SKIN}）。本行排在 ui-theme 之后，同特异性后写者胜。
 */
export const name = 'dsh-web-skin'

const BOOT_SKINS = ${JSON.stringify(bootTable)}
const STORAGE_KEY = ${JSON.stringify(STORAGE_KEY)}
const DEFAULT_SKIN = ${JSON.stringify(DEFAULT_SKIN)}
const BOOT_SCRIPT = ${bootScript}
const BOOT_CSS = ${JSON.stringify(bootCss)}

export function apply(ctx) {
	ctx.on('webserver/index-inject', (table) => {
		table.push({ kind: 'script', placement: 'head', text: BOOT_SCRIPT })
		table.push({ kind: 'style', text: BOOT_CSS })
	})
}
`
writeFileSync(join(root, 'lib', 'index.js'), indexJs)

console.log('✓ lib/client.js  (', SKIN_ORDER.length, '套皮肤 )')
console.log('✓ lib/index.js   ( 首帧引导:', SKIN_ORDER.map((id) => `${id}=${bootTable[id].join('/')}`).join(' '), ')')
console.log('done — 接着跑 npm run check')
