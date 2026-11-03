/**
 * 皮肤「Solarized / Solarized」——经典 base3 浅 / base03 深，官方十六色移植。
 * 本文件是调色板的**唯一事实源**：改完跑 `npm run build` 重新生成 lib/，
 * 再跑 `npm run check` 校验形状与对比度。
 */
export default {
	id: "solarized",
	name: { zh: "Solarized", en: "Solarized" },
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: ["#FDF6E3","#268BD2"],
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: "#002B36",
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: {
		light: "::selection{background:#D9D2B8;color:#073642}",
		dark: "body[data-ds-dark-theme] ::selection{background:#174F6A;color:#EEE8D5}",
	},
	tokens: {
	"--dsw-static-neutral-bluish-00": {
		"light": "#FFFDF5",
		"dark": "#FFFDF5"
	},
	"--dsw-static-neutral-bluish-50": {
		"light": "#FDF6E3",
		"dark": "#FDF6E3"
	},
	"--dsw-static-neutral-bluish-60": {
		"light": "#FAF0D8",
		"dark": "#FAF0D8"
	},
	"--dsw-static-neutral-bluish-75": {
		"light": "#F5EBD1",
		"dark": "#F5EBD1"
	},
	"--dsw-static-neutral-bluish-100": {
		"light": "#EEE8D5",
		"dark": "#EEE8D5"
	},
	"--dsw-static-neutral-bluish-150": {
		"light": "#E8DCB8",
		"dark": "#E8DCB8"
	},
	"--dsw-static-neutral-bluish-200": {
		"light": "#DFCE9F",
		"dark": "#DFCE9F"
	},
	"--dsw-static-neutral-bluish-300": {
		"light": "#D2BE82",
		"dark": "#D2BE82"
	},
	"--dsw-static-neutral-bluish-400": {
		"light": "#BEA76A",
		"dark": "#BEA76A"
	},
	"--dsw-static-neutral-bluish-500": {
		"light": "#A08F63",
		"dark": "#A08F63"
	},
	"--dsw-static-neutral-bluish-600": {
		"light": "#847757",
		"dark": "#847757"
	},
	"--dsw-static-neutral-bluish-700": {
		"light": "#6A6047",
		"dark": "#6A6047"
	},
	"--dsw-static-neutral-bluish-750": {
		"light": "#544C39",
		"dark": "#544C39"
	},
	"--dsw-static-neutral-bluish-800": {
		"light": "#2E444A",
		"dark": "#2E444A"
	},
	"--dsw-static-neutral-bluish-850": {
		"light": "#253A41",
		"dark": "#253A41"
	},
	"--dsw-static-neutral-bluish-875": {
		"light": "#1E3238",
		"dark": "#1E3238"
	},
	"--dsw-static-neutral-bluish-900": {
		"light": "#182B31",
		"dark": "#182B31"
	},
	"--dsw-static-neutral-bluish-950": {
		"light": "#12242A",
		"dark": "#12242A"
	},
	"--dsw-static-neutral-bluish-1000": {
		"light": "#0D1C22",
		"dark": "#0D1C22"
	},
	"--dsw-static-neutral-50": {
		"light": "#FDF6E3",
		"dark": "#FDF6E3"
	},
	"--dsw-static-neutral-100": {
		"light": "#F5EBD1",
		"dark": "#F5EBD1"
	},
	"--dsw-static-neutral-150": {
		"light": "#EEE8D5",
		"dark": "#EEE8D5"
	},
	"--dsw-static-neutral-200": {
		"light": "#E6DDC2",
		"dark": "#E6DDC2"
	},
	"--dsw-static-neutral-250": {
		"light": "#DCD1B0",
		"dark": "#DCD1B0"
	},
	"--dsw-static-neutral-300": {
		"light": "#C8BC98",
		"dark": "#C8BC98"
	},
	"--dsw-static-neutral-400": {
		"light": "#A89F80",
		"dark": "#A89F80"
	},
	"--dsw-static-neutral-500": {
		"light": "#8A8368",
		"dark": "#8A8368"
	},
	"--dsw-static-neutral-550": {
		"light": "#766F57",
		"dark": "#766F57"
	},
	"--dsw-static-neutral-600": {
		"light": "#625C4A",
		"dark": "#625C4A"
	},
	"--dsw-static-neutral-700": {
		"light": "#49443A",
		"dark": "#49443A"
	},
	"--dsw-static-neutral-800": {
		"light": "#2F2B25",
		"dark": "#2F2B25"
	},
	"--dsw-static-neutral-850": {
		"light": "#272420",
		"dark": "#272420"
	},
	"--dsw-static-neutral-900": {
		"light": "#171513",
		"dark": "#171513"
	},
	"--dsw-static-neutral-1000": {
		"light": "#0D0C0B",
		"dark": "#0D0C0B"
	},
	"--dsw-static-deepseek-50": {
		"light": "#E3F1FA",
		"dark": "#0E3547"
	},
	"--dsw-static-deepseek-100": {
		"light": "#C9E5F5",
		"dark": "#124156"
	},
	"--dsw-static-deepseek-200": {
		"light": "#A3D3EE",
		"dark": "#174F6A"
	},
	"--dsw-static-deepseek-300": {
		"light": "#75BBE6",
		"dark": "#206885"
	},
	"--dsw-static-deepseek-400": {
		"light": "#47A0DB",
		"dark": "#2E86A8"
	},
	"--dsw-static-deepseek-450": {
		"light": "#3292D8",
		"dark": "#3B9CC4"
	},
	"--dsw-static-deepseek-500": {
		"light": "#268BD2",
		"dark": "#58B4E0"
	},
	"--dsw-static-deepseek-600": {
		"light": "#1F76B4",
		"dark": "#74C2E8"
	},
	"--dsw-static-deepseek-700-delete": {
		"light": "#196296",
		"dark": "#92D0EF"
	},
	"--dsw-static-deepseek-800": {
		"light": "#144F79",
		"dark": "#B0DEF5"
	},
	"--dsw-static-deepseek-900": {
		"light": "#0F3B5C",
		"dark": "#CEEBFA"
	},
	"--dsw-static-blue-500": {
		"light": "#268BD2",
		"dark": "#58B4E0"
	},
	"--dsw-alias-bg-base": {
		"light": "#FDF6E3",
		"dark": "#002B36"
	},
	"--dsw-alias-bg-document-preview": {
		"light": "#F5EBD1",
		"dark": "#00222B"
	},
	"--dsw-alias-bg-layer-1": {
		"light": "#FFFBEF",
		"dark": "#073642"
	},
	"--dsw-alias-bg-layer-2": {
		"light": "#FFFDF5",
		"dark": "#0A414F"
	},
	"--dsw-alias-bg-layer-3": {
		"light": "#FFFFFF",
		"dark": "#0D4A5A"
	},
	"--dsw-alias-bg-overlay": {
		"light": "#F5EBD1",
		"dark": "#0A3A47"
	},
	"--dsw-alias-bg-module-platform": {
		"light": "#F8F0DC",
		"dark": "#073642"
	},
	"--dsw-alias-bg-multi-select": {
		"light": "#F1E7CC",
		"dark": "#083038"
	},
	"--dsw-specific-sidebar-fill": {
		"light": "#F5EBD1",
		"dark": "#00222B"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		"light": "#EAE0C2",
		"dark": "#0A414F"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		"light": "#EFE5CB",
		"dark": "#073642"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		"light": "#E2D7B4",
		"dark": "#0D4A5A"
	},
	"--dsw-alias-markdown-tag": {
		"light": "#E8DCB8",
		"dark": "#0A3A47"
	},
	"--dsw-specific-selector": {
		"light": "#F5EBD1",
		"dark": "#0A3A47"
	},
	"--dsw-specific-tip": {
		"light": "#F5EBD1",
		"dark": "#0A3A47"
	},
	"--dsw-specific-input-major": {
		"light": "#FFFBEF",
		"dark": "#073642"
	},
	"--dsw-specific-login-input": {
		"light": "#FDF6E3",
		"dark": "#032832"
	},
	"--dsw-specific-bubble": {
		"light": "#F1E7CC",
		"dark": "#083038"
	},
	"--dsw-specific-bubble-highlight": {
		"light": "#EAE0C2",
		"dark": "#0A414F"
	},
	"--dsw-menu-surface-fill": {
		"light": "#FFFBEF",
		"dark": "#073642"
	},
	"--dsw-alias-menu-group-header-fill": {
		"light": "#FFFBF0F2",
		"dark": "#0A414FF2"
	},
	"--dsw-specific-menu": {
		"light": "#FFFBEF",
		"dark": "#073642"
	},
	"--dsw-alias-settings-card-fill": {
		"light": "#FFFCF2",
		"dark": "#083038"
	},
	"--dsw-alias-settings-card-stroke": {
		"light": "#657B8326",
		"dark": "#93A1A126"
	},
	"--dsw-alias-bg-skeleton": {
		"light": "#657B8314",
		"dark": "#93A1A11F"
	},
	"--dsw-alias-bg-mask-drop": {
		"light": "#FDF6E3B3",
		"dark": "#002B36B3"
	},
	"--dsw-alias-label-secondary": {
		"light": "#586E75",
		"dark": "#839496"
	},
	"--dsw-alias-label-tertiary": {
		"light": "#586E75",
		"dark": "#93A1A1"
	},
	"--dsw-alias-label-caption": {
		"light": "#657B83",
		"dark": "#657B83"
	},
	"--dsw-alias-label-primary-bluish": {
		"light": "#073642",
		"dark": "#EEE8D5"
	},
	"--dsw-alias-label-deep-diving": {
		"light": "#268BD2",
		"dark": "#58B4E0"
	},
	"--dsw-alias-label-deep-diving-shimmer": {
		"light": "#47A0DB",
		"dark": "#74C2E8"
	},
	"--dsw-alias-label-shimmer": {
		"light": "color-mix(in srgb, #073642 30%, transparent)",
		"dark": "color-mix(in srgb, #EEE8D5 45%, transparent)"
	},
	"--dsw-alias-brand-primary": {
		"light": "#1F76B4",
		"dark": "#58B4E0"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		"light": "#1F76B4",
		"dark": "#58B4E0"
	},
	"--dsw-alias-onboarding-accent": {
		"light": "#1F76B4",
		"dark": "#58B4E0"
	},
	"--dsw-alias-bg-document-selection": {
		"light": "color-mix(in srgb, #268BD2 30%, transparent)",
		"dark": "color-mix(in srgb, #268BD2 40%, transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		"light": "#F1E7CC",
		"dark": "#0A3A47"
	},
	"--dsw-alias-markdown-code-block": {
		"light": "#F5EBD1",
		"dark": "#073642"
	},
	"--dsw-alias-markdown-code-block-banner": {
		"light": "#EDE2C6",
		"dark": "#0A414F"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		"light": "#EFE5CB",
		"dark": "#062E38"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		"light": "#FFFBEF",
		"dark": "#0D4A5A"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		"light": "#C8BC98",
		"dark": "#33555E"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		"light": "#BEA76A",
		"dark": "#3E646E"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		"light": "#A89F80",
		"dark": "#4A7079"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		"light": "#938B72",
		"dark": "#567D85"
	},
	"--dsw-alias-interactive-bg-hover": {
		"light": "#0736420D",
		"dark": "#FFFFFF14"
	},
	"--dsw-alias-interactive-bg-active": {
		"light": "#07364217",
		"dark": "#FFFFFF1F"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		"light": "#07364220",
		"dark": "#FFFFFF29"
	},
	"--dsw-linear-gradient-think": {
		"light": "linear-gradient(180deg, #F8F0DC 20.19%, #F8F0DC00 100%)",
		"dark": "linear-gradient(180deg, #062E38 20.19%, #062E3800 100%)"
	},
	"--dsw-linear-think-select": {
		"light": "linear-gradient(180deg, #F1E7CC 20.19%, #F1E7CC00 100%)",
		"dark": "linear-gradient(180deg, #0A3A47 20.19%, #0A3A4700 100%)"
	},
	"--dsw-alias-state-idle-primary": {
		"light": "#BEA76A",
		"dark": "#44646D"
	},
	"--dsw-alias-onboarding-secondary-fill": {
		"light": "#FFFBEF",
		"dark": "#174F6A"
	},
	"--dsw-alias-onboarding-checkbox-border": {
		"light": "color-mix(in srgb, #002B36 25%, transparent)",
		"dark": "#FFFFFF26"
	},
	"--dsw-gradient-onboarding-violet-stops": {
		"light": "#4A4FA8 33.102%, #6C71C4 50.954%, #A5A8E0 85.326%, #4A4FA8",
		"dark": "#4A4FA8 33.102%, #6C71C4 50.954%, #A5A8E0 85.326%, #4A4FA8"
	},
	"--dsw-gradient-onboarding-blue-stops": {
		"light": "#1F76B4 18.75%, #47A0DB 51.78%, #C9E5F5 86.252%, #1F76B4",
		"dark": "#1F76B4 18.75%, #47A0DB 51.78%, #C9E5F5 86.252%, #1F76B4"
	},
	"--dsw-gradient-onboarding-cyan-stops": {
		"light": "#1E7A74 21.154%, #2AA198 50.954%, #A3DCD7 85.326%, #1E7A74",
		"dark": "#1E7A74 21.154%, #2AA198 50.954%, #A3DCD7 85.326%, #1E7A74"
	},
	"--shiki-token-constant": {
		"light": "#CB4B16",
		"dark": "#CB4B16"
	},
	"--shiki-token-string": {
		"light": "#2AA198",
		"dark": "#2AA198"
	},
	"--shiki-token-comment": {
		"light": "#657B83",
		"dark": "#839496"
	},
	"--shiki-token-keyword": {
		"light": "#859900",
		"dark": "#859900"
	},
	"--shiki-token-parameter": {
		"light": "#B58900",
		"dark": "#B58900"
	},
	"--shiki-token-function": {
		"light": "#268BD2",
		"dark": "#58B4E0"
	},
	"--shiki-token-string-expression": {
		"light": "#2AA198",
		"dark": "#2AA198"
	},
	"--shiki-token-punctuation": {
		"light": "#657B83",
		"dark": "#839496"
	},
	"--shiki-token-link": {
		"light": "#6C71C4",
		"dark": "#8A8FD8"
	},
	"--dsw-radius-xs": {
		"light": "6px",
		"dark": "6px"
	},
	"--dsw-radius-sm": {
		"light": "8px",
		"dark": "8px"
	},
	"--dsw-radius-md": {
		"light": "10px",
		"dark": "10px"
	},
	"--dsw-radius-lg": {
		"light": "12px",
		"dark": "12px"
	},
	"--dsw-radius-xl": {
		"light": "14px",
		"dark": "14px"
	},
	"--dsw-radius-panel": {
		"light": "14px",
		"dark": "14px"
	},
	"--dsw-shadow-lv1": {
		"light": "0 1px 2px 0 #586E750F, 0 4px 12px 0 #586E750A",
		"dark": "0 1px 2px 0 #00000014, 0 4px 12px 0 #00000012"
	},
	"--dsw-shadow-lv1-blur": {
		"light": "0 6px 18px 0 #586E750A",
		"dark": "0 6px 18px 0 #00000014"
	},
	"--dsw-shadow-lv2": {
		"light": "0 2px 6px 0 #586E750A, 0 10px 28px 0 #586E750D",
		"dark": "0 2px 6px 0 #00000017, 0 10px 28px 0 #0000001C"
	},
	"--dsw-shadow-lv3": {
		"light": "0 0 0 .5px #586E750F, 0 10px 28px 0 #586E750F, 0 28px 56px 0 #586E7514",
		"dark": "0 0 0 .5px #FFFFFF14, 0 10px 28px 0 #0000001F, 0 28px 56px 0 #00000024"
	},
	"--dsw-alias-border-l1": {
		"light": "#657B8314",
		"dark": "#93A1A114"
	},
	"--dsw-alias-border-l2": {
		"light": "#657B8320",
		"dark": "#93A1A120"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		"light": "#657B8320",
		"dark": "#93A1A11A"
	},
	"--dsw-alias-border-l3": {
		"light": "#657B8329",
		"dark": "#93A1A129"
	},
	"--dsw-alias-border-l4": {
		"light": "#657B8338",
		"dark": "#93A1A138"
	},
	"--dsw-elevation-stroke-color": {
		"light": "#657B831F",
		"dark": "#93A1A11F"
	},
	"--dsw-font-family": {
		"light": "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Noto Sans SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
		"dark": "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Noto Sans SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
	},
	"--ds-font-family-code": {
		"light": "\"SF Mono\", \"Cascadia Code\", \"JetBrains Mono\", Menlo, Consolas, \"Liberation Mono\", \"Fira Code\", monospace",
		"dark": "\"SF Mono\", \"Cascadia Code\", \"JetBrains Mono\", Menlo, Consolas, \"Liberation Mono\", \"Fira Code\", monospace"
	},
	"--dsh-scrollbar-width": {
		"light": "8px",
		"dark": "8px"
	},
	"--dsh-scrollbar-thumb-border": {
		"light": "2px",
		"dark": "2px"
	},
	"--dsh-scrollbar-track-margin": {
		"light": "4px",
		"dark": "4px"
	}
},
}
