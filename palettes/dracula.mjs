/**
 * 皮肤「Dracula / Dracula」——官方暗夜紫 + 浅纸色变体，官方语法色全家桶。
 * 本文件是调色板的**唯一事实源**：改完跑 `npm run build` 重新生成 lib/，
 * 再跑 `npm run check` 校验形状与对比度。
 */
export default {
	id: "dracula",
	name: { zh: "Dracula", en: "Dracula" },
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: ["#282A36","#BD93F9"],
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: "#282A36",
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: {
		light: "::selection{background:#D4BEEE;color:#282A36}",
		dark: "body[data-ds-dark-theme] ::selection{background:#44475A;color:#F8F8F2}",
	},
	tokens: {
	"--dsw-static-neutral-bluish-00": {
		"light": "#FFFFFF",
		"dark": "#FFFFFF"
	},
	"--dsw-static-neutral-bluish-50": {
		"light": "#FAF7F5",
		"dark": "#FAF7F5"
	},
	"--dsw-static-neutral-bluish-60": {
		"light": "#F4F2F0",
		"dark": "#F4F2F0"
	},
	"--dsw-static-neutral-bluish-75": {
		"light": "#ECEAF0",
		"dark": "#ECEAF0"
	},
	"--dsw-static-neutral-bluish-100": {
		"light": "#E4E2EA",
		"dark": "#E4E2EA"
	},
	"--dsw-static-neutral-bluish-150": {
		"light": "#DAD7E3",
		"dark": "#DAD7E3"
	},
	"--dsw-static-neutral-bluish-200": {
		"light": "#CCC8DB",
		"dark": "#CCC8DB"
	},
	"--dsw-static-neutral-bluish-300": {
		"light": "#B3AEC6",
		"dark": "#B3AEC6"
	},
	"--dsw-static-neutral-bluish-400": {
		"light": "#938DA8",
		"dark": "#938DA8"
	},
	"--dsw-static-neutral-bluish-500": {
		"light": "#786F8E",
		"dark": "#786F8E"
	},
	"--dsw-static-neutral-bluish-600": {
		"light": "#5F5775",
		"dark": "#5F5775"
	},
	"--dsw-static-neutral-bluish-700": {
		"light": "#4C465E",
		"dark": "#4C465E"
	},
	"--dsw-static-neutral-bluish-750": {
		"light": "#3D3849",
		"dark": "#3D3849"
	},
	"--dsw-static-neutral-bluish-800": {
		"light": "#322E3B",
		"dark": "#322E3B"
	},
	"--dsw-static-neutral-bluish-850": {
		"light": "#2A2731",
		"dark": "#2A2731"
	},
	"--dsw-static-neutral-bluish-875": {
		"light": "#242130",
		"dark": "#242130"
	},
	"--dsw-static-neutral-bluish-900": {
		"light": "#1D1B26",
		"dark": "#1D1B26"
	},
	"--dsw-static-neutral-bluish-950": {
		"light": "#16141D",
		"dark": "#16141D"
	},
	"--dsw-static-neutral-bluish-1000": {
		"light": "#100E15",
		"dark": "#100E15"
	},
	"--dsw-static-neutral-50": {
		"light": "#FAF7F5",
		"dark": "#FAF7F5"
	},
	"--dsw-static-neutral-100": {
		"light": "#F4F2F0",
		"dark": "#F4F2F0"
	},
	"--dsw-static-neutral-150": {
		"light": "#ECEAF0",
		"dark": "#ECEAF0"
	},
	"--dsw-static-neutral-200": {
		"light": "#E4E2EA",
		"dark": "#E4E2EA"
	},
	"--dsw-static-neutral-250": {
		"light": "#DAD7E3",
		"dark": "#DAD7E3"
	},
	"--dsw-static-neutral-300": {
		"light": "#CCC8DB",
		"dark": "#CCC8DB"
	},
	"--dsw-static-neutral-400": {
		"light": "#938DA8",
		"dark": "#938DA8"
	},
	"--dsw-static-neutral-500": {
		"light": "#786F8E",
		"dark": "#786F8E"
	},
	"--dsw-static-neutral-550": {
		"light": "#665E7A",
		"dark": "#665E7A"
	},
	"--dsw-static-neutral-600": {
		"light": "#544D66",
		"dark": "#544D66"
	},
	"--dsw-static-neutral-700": {
		"light": "#3D3849",
		"dark": "#3D3849"
	},
	"--dsw-static-neutral-800": {
		"light": "#2A2731",
		"dark": "#2A2731"
	},
	"--dsw-static-neutral-850": {
		"light": "#242130",
		"dark": "#242130"
	},
	"--dsw-static-neutral-900": {
		"light": "#16141D",
		"dark": "#16141D"
	},
	"--dsw-static-neutral-1000": {
		"light": "#0E0C12",
		"dark": "#0E0C12"
	},
	"--dsw-static-deepseek-50": {
		"light": "#F3EDFA",
		"dark": "#2D2440"
	},
	"--dsw-static-deepseek-100": {
		"light": "#E6D9F5",
		"dark": "#372C4E"
	},
	"--dsw-static-deepseek-200": {
		"light": "#D4BEEE",
		"dark": "#443661"
	},
	"--dsw-static-deepseek-300": {
		"light": "#BC9BE5",
		"dark": "#6B5590"
	},
	"--dsw-static-deepseek-400": {
		"light": "#A178DB",
		"dark": "#9378BC"
	},
	"--dsw-static-deepseek-450": {
		"light": "#8A5CD0",
		"dark": "#A98BD6"
	},
	"--dsw-static-deepseek-500": {
		"light": "#7134C8",
		"dark": "#BD93F9"
	},
	"--dsw-static-deepseek-600": {
		"light": "#5F2BAC",
		"dark": "#C8A6FA"
	},
	"--dsw-static-deepseek-700-delete": {
		"light": "#4E2391",
		"dark": "#D4BAFB"
	},
	"--dsw-static-deepseek-800": {
		"light": "#3E1C75",
		"dark": "#E1CEFC"
	},
	"--dsw-static-deepseek-900": {
		"light": "#2F1558",
		"dark": "#EDE2FD"
	},
	"--dsw-static-blue-500": {
		"light": "#7134C8",
		"dark": "#BD93F9"
	},
	"--dsw-alias-bg-base": {
		"light": "#FAF7F0",
		"dark": "#282A36"
	},
	"--dsw-alias-bg-document-preview": {
		"light": "#F4F0E6",
		"dark": "#21232E"
	},
	"--dsw-alias-bg-layer-1": {
		"light": "#FFFEFB",
		"dark": "#2E3040"
	},
	"--dsw-alias-bg-layer-2": {
		"light": "#FFFFFF",
		"dark": "#343648"
	},
	"--dsw-alias-bg-layer-3": {
		"light": "#FFFFFF",
		"dark": "#3B3D52"
	},
	"--dsw-alias-bg-overlay": {
		"light": "#F4F0E6",
		"dark": "#32344A"
	},
	"--dsw-alias-bg-module-platform": {
		"light": "#F6F2EA",
		"dark": "#2E3040"
	},
	"--dsw-alias-bg-multi-select": {
		"light": "#F0EBE0",
		"dark": "#2E3242"
	},
	"--dsw-specific-sidebar-fill": {
		"light": "#F4F0E6",
		"dark": "#22242F"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		"light": "#E9E4D6",
		"dark": "#3B3D52"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		"light": "#EFEADB",
		"dark": "#32344A"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		"light": "#E2DCC8",
		"dark": "#44475A"
	},
	"--dsw-alias-markdown-tag": {
		"light": "#E5E0D2",
		"dark": "#383A4E"
	},
	"--dsw-specific-selector": {
		"light": "#F4F0E6",
		"dark": "#32344A"
	},
	"--dsw-specific-tip": {
		"light": "#F4F0E6",
		"dark": "#32344A"
	},
	"--dsw-specific-input-major": {
		"light": "#FFFFFF",
		"dark": "#2E3040"
	},
	"--dsw-specific-login-input": {
		"light": "#FAF7F0",
		"dark": "#24262F"
	},
	"--dsw-specific-bubble": {
		"light": "#F0EBE0",
		"dark": "#2E3242"
	},
	"--dsw-specific-bubble-highlight": {
		"light": "#E9E4D6",
		"dark": "#3B3D52"
	},
	"--dsw-menu-surface-fill": {
		"light": "#FFFEFB",
		"dark": "#2E3040"
	},
	"--dsw-alias-menu-group-header-fill": {
		"light": "#FFFEFBF2",
		"dark": "#343648F2"
	},
	"--dsw-specific-menu": {
		"light": "#FFFEFB",
		"dark": "#2E3040"
	},
	"--dsw-alias-settings-card-fill": {
		"light": "#FDFBF5",
		"dark": "#2B2D3C"
	},
	"--dsw-alias-settings-card-stroke": {
		"light": "#BD93F926",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-bg-skeleton": {
		"light": "#282A360F",
		"dark": "#F8F8F214"
	},
	"--dsw-alias-bg-mask-drop": {
		"light": "#FAF7F0B3",
		"dark": "#282A36B3"
	},
	"--dsw-alias-label-secondary": {
		"light": "#565064",
		"dark": "#B8B4C6"
	},
	"--dsw-alias-label-tertiary": {
		"light": "#6A6578",
		"dark": "#9690AB"
	},
	"--dsw-alias-label-caption": {
		"light": "#827C8E",
		"dark": "#938DA8"
	},
	"--dsw-alias-label-primary-bluish": {
		"light": "#282A36",
		"dark": "#F8F8F2"
	},
	"--dsw-alias-label-deep-diving": {
		"light": "#7134C8",
		"dark": "#BD93F9"
	},
	"--dsw-alias-label-deep-diving-shimmer": {
		"light": "#8A5CD0",
		"dark": "#D4BAFB"
	},
	"--dsw-alias-label-shimmer": {
		"light": "color-mix(in srgb, #282A36 30%, transparent)",
		"dark": "color-mix(in srgb, #F8F8F2 45%, transparent)"
	},
	"--dsw-alias-brand-primary": {
		"light": "#7134C8",
		"dark": "#BD93F9"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		"light": "#7134C8",
		"dark": "#BD93F9"
	},
	"--dsw-alias-onboarding-accent": {
		"light": "#7134C8",
		"dark": "#BD93F9"
	},
	"--dsw-alias-bg-document-selection": {
		"light": "color-mix(in srgb, #BD93F9 35%, transparent)",
		"dark": "color-mix(in srgb, #BD93F9 40%, transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		"light": "#EDE8DB",
		"dark": "#343648"
	},
	"--dsw-alias-markdown-code-block": {
		"light": "#F4F0E6",
		"dark": "#21232E"
	},
	"--dsw-alias-markdown-code-block-banner": {
		"light": "#EBE5D6",
		"dark": "#2B2D3C"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		"light": "#EFEADB",
		"dark": "#1E2029"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		"light": "#FFFEFB",
		"dark": "#343648"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		"light": "#B8B4C6",
		"dark": "#4C465E"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		"light": "#A8A4B8",
		"dark": "#57526B"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		"light": "#9894AC",
		"dark": "#635C76"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		"light": "#8A86A0",
		"dark": "#6E6680"
	},
	"--dsw-alias-interactive-bg-hover": {
		"light": "#282A360D",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-interactive-bg-active": {
		"light": "#282A3617",
		"dark": "#FFFFFF24"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		"light": "#282A3620",
		"dark": "#FFFFFF2E"
	},
	"--dsw-linear-gradient-think": {
		"light": "linear-gradient(180deg, #F6F2EA 20.19%, #F6F2EA00 100%)",
		"dark": "linear-gradient(180deg, #1E2029 20.19%, #1E202900 100%)"
	},
	"--dsw-linear-think-select": {
		"light": "linear-gradient(180deg, #EFEADB 20.19%, #EFEADB00 100%)",
		"dark": "linear-gradient(180deg, #2E3242 20.19%, #2E324200 100%)"
	},
	"--dsw-alias-state-idle-primary": {
		"light": "#B3AEC6",
		"dark": "#6E6680"
	},
	"--dsw-alias-onboarding-secondary-fill": {
		"light": "#FFFEFB",
		"dark": "#443661"
	},
	"--dsw-alias-onboarding-checkbox-border": {
		"light": "color-mix(in srgb, #282A36 25%, transparent)",
		"dark": "#FFFFFF26"
	},
	"--dsw-gradient-onboarding-violet-stops": {
		"light": "#5F2BAC 33.102%, #A178DB 50.954%, #D4BEEE 85.326%, #5F2BAC",
		"dark": "#5F2BAC 33.102%, #A178DB 50.954%, #D4BEEE 85.326%, #5F2BAC"
	},
	"--dsw-gradient-onboarding-blue-stops": {
		"light": "#3E1C75 18.75%, #8A5CD0 51.78%, #E6D9F5 86.252%, #3E1C75",
		"dark": "#3E1C75 18.75%, #8A5CD0 51.78%, #E6D9F5 86.252%, #3E1C75"
	},
	"--dsw-gradient-onboarding-cyan-stops": {
		"light": "#0E6E7A 21.154%, #29B8CC 50.954%, #BDEFF8 85.326%, #0E6E7A",
		"dark": "#0E6E7A 21.154%, #29B8CC 50.954%, #BDEFF8 85.326%, #0E6E7A"
	},
	"--shiki-token-constant": {
		"light": "#7C3AED",
		"dark": "#BD93F9"
	},
	"--shiki-token-string": {
		"light": "#8A7200",
		"dark": "#F1FA8C"
	},
	"--shiki-token-comment": {
		"light": "#6272A4",
		"dark": "#6272A4"
	},
	"--shiki-token-keyword": {
		"light": "#B8286A",
		"dark": "#FF79C6"
	},
	"--shiki-token-parameter": {
		"light": "#B85C00",
		"dark": "#FFB86C"
	},
	"--shiki-token-function": {
		"light": "#1E8A3C",
		"dark": "#50FA7B"
	},
	"--shiki-token-string-expression": {
		"light": "#8A7200",
		"dark": "#F1FA8C"
	},
	"--shiki-token-punctuation": {
		"light": "#6A6578",
		"dark": "#938DA8"
	},
	"--shiki-token-link": {
		"light": "#0E7A8A",
		"dark": "#8BE9FD"
	},
	"--dsw-radius-xs": {
		"light": "8px",
		"dark": "8px"
	},
	"--dsw-radius-sm": {
		"light": "10px",
		"dark": "10px"
	},
	"--dsw-radius-md": {
		"light": "12px",
		"dark": "12px"
	},
	"--dsw-radius-lg": {
		"light": "14px",
		"dark": "14px"
	},
	"--dsw-radius-xl": {
		"light": "18px",
		"dark": "18px"
	},
	"--dsw-radius-panel": {
		"light": "18px",
		"dark": "18px"
	},
	"--dsw-shadow-lv1": {
		"light": "0 1px 2px 0 #282A360F, 0 4px 12px 0 #282A360A",
		"dark": "0 1px 2px 0 #00000014, 0 4px 12px 0 #00000012"
	},
	"--dsw-shadow-lv1-blur": {
		"light": "0 6px 18px 0 #282A360A",
		"dark": "0 6px 18px 0 #00000014"
	},
	"--dsw-shadow-lv2": {
		"light": "0 2px 6px 0 #282A360A, 0 10px 28px 0 #282A360D",
		"dark": "0 2px 6px 0 #00000017, 0 10px 28px 0 #0000001C"
	},
	"--dsw-shadow-lv3": {
		"light": "0 0 0 .5px #282A360F, 0 10px 28px 0 #282A360F, 0 28px 56px 0 #282A3614",
		"dark": "0 0 0 .5px #FFFFFF14, 0 10px 28px 0 #0000001F, 0 28px 56px 0 #00000024"
	},
	"--dsw-alias-border-l1": {
		"light": "#282A360F",
		"dark": "#FFFFFF0D"
	},
	"--dsw-alias-border-l2": {
		"light": "#282A3617",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		"light": "#282A3617",
		"dark": "#FFFFFF0F"
	},
	"--dsw-alias-border-l3": {
		"light": "#282A3620",
		"dark": "#FFFFFF20"
	},
	"--dsw-alias-border-l4": {
		"light": "#282A3629",
		"dark": "#FFFFFF29"
	},
	"--dsw-elevation-stroke-color": {
		"light": "#282A3614",
		"dark": "#FFFFFF14"
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
