/**
 * 皮肤「粗野主义 / Brutalism」——纯白/纯黑实边框、零圆角、偏移硬阴影，蓝黄撞色。
 * 本文件是调色板的**唯一事实源**：改完跑 `npm run build` 重新生成 lib/，
 * 再跑 `npm run check` 校验形状与对比度。
 */
export default {
	id: "brutalism",
	name: { zh: "粗野主义", en: "Brutalism" },
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: ["#FFFFFF","#0033DD"],
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: "#121212",
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: {
		light: "::selection{background:#FFE500;color:#000000}",
		dark: "body[data-ds-dark-theme] ::selection{background:#FFE500;color:#000000}",
	},
	tokens: {
	"--dsw-static-neutral-bluish-00": {
		"light": "#FFFFFF",
		"dark": "#FFFFFF"
	},
	"--dsw-static-neutral-bluish-50": {
		"light": "#FAFAFA",
		"dark": "#FAFAFA"
	},
	"--dsw-static-neutral-bluish-60": {
		"light": "#F5F5F5",
		"dark": "#F5F5F5"
	},
	"--dsw-static-neutral-bluish-75": {
		"light": "#F0F0F0",
		"dark": "#F0F0F0"
	},
	"--dsw-static-neutral-bluish-100": {
		"light": "#EBEBEB",
		"dark": "#EBEBEB"
	},
	"--dsw-static-neutral-bluish-150": {
		"light": "#E5E5E5",
		"dark": "#E5E5E5"
	},
	"--dsw-static-neutral-bluish-200": {
		"light": "#DBDBDB",
		"dark": "#DBDBDB"
	},
	"--dsw-static-neutral-bluish-300": {
		"light": "#C4C4C4",
		"dark": "#C4C4C4"
	},
	"--dsw-static-neutral-bluish-400": {
		"light": "#A3A3A3",
		"dark": "#A3A3A3"
	},
	"--dsw-static-neutral-bluish-500": {
		"light": "#8A8A8A",
		"dark": "#8A8A8A"
	},
	"--dsw-static-neutral-bluish-600": {
		"light": "#6E6E6E",
		"dark": "#6E6E6E"
	},
	"--dsw-static-neutral-bluish-700": {
		"light": "#595959",
		"dark": "#595959"
	},
	"--dsw-static-neutral-bluish-750": {
		"light": "#464646",
		"dark": "#464646"
	},
	"--dsw-static-neutral-bluish-800": {
		"light": "#383838",
		"dark": "#383838"
	},
	"--dsw-static-neutral-bluish-850": {
		"light": "#2C2C2C",
		"dark": "#2C2C2C"
	},
	"--dsw-static-neutral-bluish-875": {
		"light": "#242424",
		"dark": "#242424"
	},
	"--dsw-static-neutral-bluish-900": {
		"light": "#1C1C1C",
		"dark": "#1C1C1C"
	},
	"--dsw-static-neutral-bluish-950": {
		"light": "#151515",
		"dark": "#151515"
	},
	"--dsw-static-neutral-bluish-1000": {
		"light": "#101010",
		"dark": "#101010"
	},
	"--dsw-static-neutral-50": {
		"light": "#FAFAFA",
		"dark": "#FAFAFA"
	},
	"--dsw-static-neutral-100": {
		"light": "#F5F5F5",
		"dark": "#F5F5F5"
	},
	"--dsw-static-neutral-150": {
		"light": "#F0F0F0",
		"dark": "#F0F0F0"
	},
	"--dsw-static-neutral-200": {
		"light": "#EBEBEB",
		"dark": "#EBEBEB"
	},
	"--dsw-static-neutral-250": {
		"light": "#E3E3E3",
		"dark": "#E3E3E3"
	},
	"--dsw-static-neutral-300": {
		"light": "#DBDBDB",
		"dark": "#DBDBDB"
	},
	"--dsw-static-neutral-400": {
		"light": "#A3A3A3",
		"dark": "#A3A3A3"
	},
	"--dsw-static-neutral-500": {
		"light": "#8A8A8A",
		"dark": "#8A8A8A"
	},
	"--dsw-static-neutral-550": {
		"light": "#757575",
		"dark": "#757575"
	},
	"--dsw-static-neutral-600": {
		"light": "#5C5C5C",
		"dark": "#5C5C5C"
	},
	"--dsw-static-neutral-700": {
		"light": "#444444",
		"dark": "#444444"
	},
	"--dsw-static-neutral-800": {
		"light": "#2E2E2E",
		"dark": "#2E2E2E"
	},
	"--dsw-static-neutral-850": {
		"light": "#262626",
		"dark": "#262626"
	},
	"--dsw-static-neutral-900": {
		"light": "#161616",
		"dark": "#161616"
	},
	"--dsw-static-neutral-1000": {
		"light": "#0D0D0D",
		"dark": "#0D0D0D"
	},
	"--dsw-static-deepseek-50": {
		"light": "#E5EBFF",
		"dark": "#3A2E00"
	},
	"--dsw-static-deepseek-100": {
		"light": "#CCD6FF",
		"dark": "#4A3B00"
	},
	"--dsw-static-deepseek-200": {
		"light": "#A3B8FF",
		"dark": "#5C4A00"
	},
	"--dsw-static-deepseek-300": {
		"light": "#6B8CFF",
		"dark": "#8A7000"
	},
	"--dsw-static-deepseek-400": {
		"light": "#3D6BFF",
		"dark": "#B89500"
	},
	"--dsw-static-deepseek-450": {
		"light": "#1F51FF",
		"dark": "#D4AA00"
	},
	"--dsw-static-deepseek-500": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-static-deepseek-600": {
		"light": "#002CBB",
		"dark": "#FFEA33"
	},
	"--dsw-static-deepseek-700-delete": {
		"light": "#002499",
		"dark": "#FFF066"
	},
	"--dsw-static-deepseek-800": {
		"light": "#001C77",
		"dark": "#FFF599"
	},
	"--dsw-static-deepseek-900": {
		"light": "#001455",
		"dark": "#FFFACC"
	},
	"--dsw-static-blue-500": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-alias-bg-base": {
		"light": "#FFFFFF",
		"dark": "#121212"
	},
	"--dsw-alias-bg-document-preview": {
		"light": "#FAFAFA",
		"dark": "#0D0D0D"
	},
	"--dsw-alias-bg-layer-1": {
		"light": "#FFFFFF",
		"dark": "#1A1A1A"
	},
	"--dsw-alias-bg-layer-2": {
		"light": "#FFFFFF",
		"dark": "#212121"
	},
	"--dsw-alias-bg-layer-3": {
		"light": "#FFFFFF",
		"dark": "#282828"
	},
	"--dsw-alias-bg-overlay": {
		"light": "#F0F0F0",
		"dark": "#242424"
	},
	"--dsw-alias-bg-module-platform": {
		"light": "#F5F5F5",
		"dark": "#202020"
	},
	"--dsw-alias-bg-multi-select": {
		"light": "#F0F0F0",
		"dark": "#222222"
	},
	"--dsw-specific-sidebar-fill": {
		"light": "#F5F5F5",
		"dark": "#0D0D0D"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		"light": "#E5E5E5",
		"dark": "#262626"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		"light": "#EBEBEB",
		"dark": "#1C1C1C"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		"light": "#DCDCDC",
		"dark": "#2E2E2E"
	},
	"--dsw-alias-markdown-tag": {
		"light": "#E8E8E8",
		"dark": "#282828"
	},
	"--dsw-specific-selector": {
		"light": "#F0F0F0",
		"dark": "#242424"
	},
	"--dsw-specific-tip": {
		"light": "#F0F0F0",
		"dark": "#242424"
	},
	"--dsw-specific-input-major": {
		"light": "#FFFFFF",
		"dark": "#1A1A1A"
	},
	"--dsw-specific-login-input": {
		"light": "#FAFAFA",
		"dark": "#141414"
	},
	"--dsw-specific-bubble": {
		"light": "#F0F0F0",
		"dark": "#202020"
	},
	"--dsw-specific-bubble-highlight": {
		"light": "#E0E0E0",
		"dark": "#2A2A2A"
	},
	"--dsw-menu-surface-fill": {
		"light": "#FFFFFF",
		"dark": "#1A1A1A"
	},
	"--dsw-alias-menu-group-header-fill": {
		"light": "#FFFFFFF2",
		"dark": "#202020F2"
	},
	"--dsw-specific-menu": {
		"light": "#FFFFFF",
		"dark": "#1A1A1A"
	},
	"--dsw-alias-settings-card-fill": {
		"light": "#FFFFFF",
		"dark": "#1C1C1C"
	},
	"--dsw-alias-settings-card-stroke": {
		"light": "#000000",
		"dark": "#FFFFFF"
	},
	"--dsw-alias-bg-skeleton": {
		"light": "#0000000F",
		"dark": "#FFFFFF1A"
	},
	"--dsw-alias-bg-mask-drop": {
		"light": "#FFFFFFB3",
		"dark": "#121212B3"
	},
	"--dsw-alias-label-secondary": {
		"light": "#3D3D3D",
		"dark": "#C9C9C9"
	},
	"--dsw-alias-label-tertiary": {
		"light": "#595959",
		"dark": "#A6A6A6"
	},
	"--dsw-alias-label-caption": {
		"light": "#757575",
		"dark": "#8C8C8C"
	},
	"--dsw-alias-label-primary-bluish": {
		"light": "#000000",
		"dark": "#FAFAFA"
	},
	"--dsw-alias-label-deep-diving": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-alias-label-deep-diving-shimmer": {
		"light": "#3D6BFF",
		"dark": "#FFF066"
	},
	"--dsw-alias-label-shimmer": {
		"light": "color-mix(in srgb, #000000 30%, transparent)",
		"dark": "color-mix(in srgb, #FAFAFA 45%, transparent)"
	},
	"--dsw-alias-brand-primary": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-alias-onboarding-accent": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-alias-bg-document-selection": {
		"light": "color-mix(in srgb, #3D6BFF 35%, transparent)",
		"dark": "color-mix(in srgb, #FFE500 35%, transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		"light": "#F0F0F0",
		"dark": "#262626"
	},
	"--dsw-alias-markdown-code-block": {
		"light": "#F5F5F5",
		"dark": "#161616"
	},
	"--dsw-alias-markdown-code-block-banner": {
		"light": "#EBEBEB",
		"dark": "#202020"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		"light": "#F0F0F0",
		"dark": "#141414"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		"light": "#FFFFFF",
		"dark": "#222222"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		"light": "#C9C9C9",
		"dark": "#404040"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		"light": "#C2C2C2",
		"dark": "#484848"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		"light": "#B0B0B0",
		"dark": "#505050"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		"light": "#A6A6A6",
		"dark": "#585858"
	},
	"--dsw-alias-interactive-bg-hover": {
		"light": "#0000000F",
		"dark": "#FFFFFF1A"
	},
	"--dsw-alias-interactive-bg-active": {
		"light": "#0000001A",
		"dark": "#FFFFFF26"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		"light": "#00000026",
		"dark": "#FFFFFF33"
	},
	"--dsw-linear-gradient-think": {
		"light": "linear-gradient(180deg, #F5F5F5 20.19%, #F5F5F500 100%)",
		"dark": "linear-gradient(180deg, #161616 20.19%, #16161600 100%)"
	},
	"--dsw-linear-think-select": {
		"light": "linear-gradient(180deg, #EBEBEB 20.19%, #EBEBEB00 100%)",
		"dark": "linear-gradient(180deg, #222222 20.19%, #22222200 100%)"
	},
	"--dsw-alias-state-idle-primary": {
		"light": "#C4C4C4",
		"dark": "#585858"
	},
	"--dsw-alias-onboarding-secondary-fill": {
		"light": "#FFFFFF",
		"dark": "#262626"
	},
	"--dsw-alias-onboarding-checkbox-border": {
		"light": "#000000",
		"dark": "#FFFFFF"
	},
	"--dsw-gradient-onboarding-violet-stops": {
		"light": "#002CBB 33.102%, #3D6BFF 50.954%, #A3B8FF 85.326%, #002CBB",
		"dark": "#8A7000 33.102%, #FFE500 50.954%, #FFF066 85.326%, #8A7000"
	},
	"--dsw-gradient-onboarding-blue-stops": {
		"light": "#0033DD 18.75%, #6B8CFF 51.78%, #CCD6FF 86.252%, #0033DD",
		"dark": "#B89500 18.75%, #FFE500 51.78%, #FFF599 86.252%, #B89500"
	},
	"--dsw-gradient-onboarding-cyan-stops": {
		"light": "#001C77 21.154%, #1F51FF 50.954%, #E5EBFF 85.326%, #001C77",
		"dark": "#5C4A00 21.154%, #D4AA00 50.954%, #FFFACC 85.326%, #5C4A00"
	},
	"--shiki-token-constant": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--shiki-token-string": {
		"light": "#0A7A0A",
		"dark": "#7FDB7F"
	},
	"--shiki-token-comment": {
		"light": "#757575",
		"dark": "#8C8C8C"
	},
	"--shiki-token-keyword": {
		"light": "#000000",
		"dark": "#FFFFFF"
	},
	"--shiki-token-parameter": {
		"light": "#595959",
		"dark": "#BFBFBF"
	},
	"--shiki-token-function": {
		"light": "#D6006D",
		"dark": "#FF4DB8"
	},
	"--shiki-token-string-expression": {
		"light": "#0A7A0A",
		"dark": "#7FDB7F"
	},
	"--shiki-token-punctuation": {
		"light": "#595959",
		"dark": "#A6A6A6"
	},
	"--shiki-token-link": {
		"light": "#0033DD",
		"dark": "#FFE500"
	},
	"--dsw-radius-xs": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsw-radius-sm": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsw-radius-md": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsw-radius-lg": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsw-radius-xl": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsw-radius-panel": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsw-shadow-lv1": {
		"light": "3px 3px 0 0 #000000",
		"dark": "3px 3px 0 0 #000000"
	},
	"--dsw-shadow-lv1-blur": {
		"light": "4px 4px 0 0 #00000026",
		"dark": "4px 4px 0 0 #00000080"
	},
	"--dsw-shadow-lv2": {
		"light": "5px 5px 0 0 #000000",
		"dark": "5px 5px 0 0 #000000"
	},
	"--dsw-shadow-lv3": {
		"light": "0 0 0 2px #000000, 8px 8px 0 0 #000000",
		"dark": "0 0 0 2px #FFFFFF, 8px 8px 0 0 #000000"
	},
	"--dsw-alias-border-l1": {
		"light": "#00000033",
		"dark": "#FFFFFF33"
	},
	"--dsw-alias-border-l2": {
		"light": "#00000080",
		"dark": "#FFFFFF80"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		"light": "#00000080",
		"dark": "#FFFFFF59"
	},
	"--dsw-alias-border-l3": {
		"light": "#000000",
		"dark": "#FFFFFF"
	},
	"--dsw-alias-border-l4": {
		"light": "#000000",
		"dark": "#FFFFFF"
	},
	"--dsw-elevation-stroke-color": {
		"light": "#000000",
		"dark": "#FFFFFF"
	},
	"--dsw-font-family": {
		"light": "Arial, \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Noto Sans SC\", \"Microsoft YaHei\", sans-serif",
		"dark": "Arial, \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Noto Sans SC\", \"Microsoft YaHei\", sans-serif"
	},
	"--ds-font-family-code": {
		"light": "\"Courier New\", Courier, \"SF Mono\", Menlo, monospace",
		"dark": "\"Courier New\", Courier, \"SF Mono\", Menlo, monospace"
	},
	"--dsh-scrollbar-width": {
		"light": "12px",
		"dark": "12px"
	},
	"--dsh-scrollbar-thumb-border": {
		"light": "0px",
		"dark": "0px"
	},
	"--dsh-scrollbar-track-margin": {
		"light": "0px",
		"dark": "0px"
	}
},
}
