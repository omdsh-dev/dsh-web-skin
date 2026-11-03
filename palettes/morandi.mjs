/**
 * 皮肤「莫兰迪 / Morandi」——低饱和暖灰静物色，灰尘蓝强调，柔软弥散阴影。
 * 本文件是调色板的**唯一事实源**：改完跑 `npm run build` 重新生成 lib/，
 * 再跑 `npm run check` 校验形状与对比度。
 */
export default {
	id: "morandi",
	name: { zh: "莫兰迪", en: "Morandi" },
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: ["#EAE8E4","#5B7484"],
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: "#232220",
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: {
		light: "::selection{background:#C2D1D7;color:#3A3835}",
		dark: "body[data-ds-dark-theme] ::selection{background:#415763;color:#E9EEF0}",
	},
	tokens: {
	"--dsw-static-neutral-bluish-00": {
		"light": "#FFFFFF",
		"dark": "#FFFFFF"
	},
	"--dsw-static-neutral-bluish-50": {
		"light": "#F4F3F0",
		"dark": "#F4F3F0"
	},
	"--dsw-static-neutral-bluish-60": {
		"light": "#EFEDE9",
		"dark": "#EFEDE9"
	},
	"--dsw-static-neutral-bluish-75": {
		"light": "#EBEBE6",
		"dark": "#EBEBE6"
	},
	"--dsw-static-neutral-bluish-100": {
		"light": "#E5E3DE",
		"dark": "#E5E3DE"
	},
	"--dsw-static-neutral-bluish-150": {
		"light": "#E0DED8",
		"dark": "#E0DED8"
	},
	"--dsw-static-neutral-bluish-200": {
		"light": "#D6D4CD",
		"dark": "#D6D4CD"
	},
	"--dsw-static-neutral-bluish-300": {
		"light": "#C2C0B8",
		"dark": "#C2C0B8"
	},
	"--dsw-static-neutral-bluish-400": {
		"light": "#A3A19A",
		"dark": "#A3A19A"
	},
	"--dsw-static-neutral-bluish-500": {
		"light": "#8A887F",
		"dark": "#8A887F"
	},
	"--dsw-static-neutral-bluish-600": {
		"light": "#716F66",
		"dark": "#716F66"
	},
	"--dsw-static-neutral-bluish-700": {
		"light": "#5D5B54",
		"dark": "#5D5B54"
	},
	"--dsw-static-neutral-bluish-750": {
		"light": "#4A4842",
		"dark": "#4A4842"
	},
	"--dsw-static-neutral-bluish-800": {
		"light": "#3B3935",
		"dark": "#3B3935"
	},
	"--dsw-static-neutral-bluish-850": {
		"light": "#302F2B",
		"dark": "#302F2B"
	},
	"--dsw-static-neutral-bluish-875": {
		"light": "#282724",
		"dark": "#282724"
	},
	"--dsw-static-neutral-bluish-900": {
		"light": "#201F1D",
		"dark": "#201F1D"
	},
	"--dsw-static-neutral-bluish-950": {
		"light": "#181716",
		"dark": "#181716"
	},
	"--dsw-static-neutral-bluish-1000": {
		"light": "#121110",
		"dark": "#121110"
	},
	"--dsw-static-neutral-50": {
		"light": "#F4F3F0",
		"dark": "#F4F3F0"
	},
	"--dsw-static-neutral-100": {
		"light": "#EFEDE9",
		"dark": "#EFEDE9"
	},
	"--dsw-static-neutral-150": {
		"light": "#EAE8E3",
		"dark": "#EAE8E3"
	},
	"--dsw-static-neutral-200": {
		"light": "#E5E3DE",
		"dark": "#E5E3DE"
	},
	"--dsw-static-neutral-250": {
		"light": "#DEDCD6",
		"dark": "#DEDCD6"
	},
	"--dsw-static-neutral-300": {
		"light": "#D6D4CD",
		"dark": "#D6D4CD"
	},
	"--dsw-static-neutral-400": {
		"light": "#A8A69E",
		"dark": "#A8A69E"
	},
	"--dsw-static-neutral-500": {
		"light": "#8B897F",
		"dark": "#8B897F"
	},
	"--dsw-static-neutral-550": {
		"light": "#75736A",
		"dark": "#75736A"
	},
	"--dsw-static-neutral-600": {
		"light": "#605E56",
		"dark": "#605E56"
	},
	"--dsw-static-neutral-700": {
		"light": "#484641",
		"dark": "#484641"
	},
	"--dsw-static-neutral-800": {
		"light": "#302F2B",
		"dark": "#302F2B"
	},
	"--dsw-static-neutral-850": {
		"light": "#292827",
		"dark": "#292827"
	},
	"--dsw-static-neutral-900": {
		"light": "#191816",
		"dark": "#191816"
	},
	"--dsw-static-neutral-1000": {
		"light": "#100F0E",
		"dark": "#100F0E"
	},
	"--dsw-static-deepseek-50": {
		"light": "#E9EEF0",
		"dark": "#232D33"
	},
	"--dsw-static-deepseek-100": {
		"light": "#D8E2E6",
		"dark": "#29353C"
	},
	"--dsw-static-deepseek-200": {
		"light": "#C2D1D7",
		"dark": "#31404A"
	},
	"--dsw-static-deepseek-300": {
		"light": "#A3B8C1",
		"dark": "#4A606C"
	},
	"--dsw-static-deepseek-400": {
		"light": "#849DA9",
		"dark": "#6E8894"
	},
	"--dsw-static-deepseek-450": {
		"light": "#6E8B99",
		"dark": "#8AA4AE"
	},
	"--dsw-static-deepseek-500": {
		"light": "#5B7484",
		"dark": "#A4BAC3"
	},
	"--dsw-static-deepseek-600": {
		"light": "#4E6675",
		"dark": "#B5C7CE"
	},
	"--dsw-static-deepseek-700-delete": {
		"light": "#415763",
		"dark": "#C5D4DA"
	},
	"--dsw-static-deepseek-800": {
		"light": "#354854",
		"dark": "#D4DFE4"
	},
	"--dsw-static-deepseek-900": {
		"light": "#283842",
		"dark": "#E4EBEE"
	},
	"--dsw-static-blue-500": {
		"light": "#5B7484",
		"dark": "#A4BAC3"
	},
	"--dsw-alias-bg-base": {
		"light": "#EAE8E4",
		"dark": "#262523"
	},
	"--dsw-alias-bg-document-preview": {
		"light": "#E3E1DC",
		"dark": "#201F1D"
	},
	"--dsw-alias-bg-layer-1": {
		"light": "#F0EFEB",
		"dark": "#2D2C2A"
	},
	"--dsw-alias-bg-layer-2": {
		"light": "#F5F4F1",
		"dark": "#343331"
	},
	"--dsw-alias-bg-layer-3": {
		"light": "#FAF9F7",
		"dark": "#3B3A38"
	},
	"--dsw-alias-bg-overlay": {
		"light": "#E7E5E0",
		"dark": "#32312F"
	},
	"--dsw-alias-bg-module-platform": {
		"light": "#E9E7E2",
		"dark": "#333230"
	},
	"--dsw-alias-bg-multi-select": {
		"light": "#E4E2DC",
		"dark": "#302F2D"
	},
	"--dsw-specific-sidebar-fill": {
		"light": "#E6E4DF",
		"dark": "#1F1E1C"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		"light": "#DCDAD4",
		"dark": "#353433"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		"light": "#E1DFDA",
		"dark": "#2B2A28"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		"light": "#D4D2CB",
		"dark": "#3E3D3A"
	},
	"--dsw-alias-markdown-tag": {
		"light": "#DBD9D3",
		"dark": "#373634"
	},
	"--dsw-specific-selector": {
		"light": "#E7E5E0",
		"dark": "#32312F"
	},
	"--dsw-specific-tip": {
		"light": "#E7E5E0",
		"dark": "#32312F"
	},
	"--dsw-specific-input-major": {
		"light": "#F7F6F3",
		"dark": "#2D2C2A"
	},
	"--dsw-specific-login-input": {
		"light": "#F0EFEB",
		"dark": "#232220"
	},
	"--dsw-specific-bubble": {
		"light": "#E2E4E1",
		"dark": "#2F3130"
	},
	"--dsw-specific-bubble-highlight": {
		"light": "#D5D8D4",
		"dark": "#3A3C3B"
	},
	"--dsw-menu-surface-fill": {
		"light": "#F5F4F1E6",
		"dark": "#2D2C2AE6"
	},
	"--dsw-alias-menu-group-header-fill": {
		"light": "#F5F4F1F2",
		"dark": "#32312FF2"
	},
	"--dsw-specific-menu": {
		"light": "#F5F4F1E6",
		"dark": "#2D2C2AE6"
	},
	"--dsw-alias-settings-card-fill": {
		"light": "#F2F1ED",
		"dark": "#2B2A28"
	},
	"--dsw-alias-settings-card-stroke": {
		"light": "#4A474314",
		"dark": "#FFFFFF14"
	},
	"--dsw-alias-bg-skeleton": {
		"light": "#4A47430A",
		"dark": "#EFEDE914"
	},
	"--dsw-alias-bg-mask-drop": {
		"light": "#F5F4F1B3",
		"dark": "#2D2C2AB3"
	},
	"--dsw-alias-label-secondary": {
		"light": "#5C5952",
		"dark": "#B5B2AA"
	},
	"--dsw-alias-label-tertiary": {
		"light": "#68655D",
		"dark": "#98958D"
	},
	"--dsw-alias-label-caption": {
		"light": "#7F7C73",
		"dark": "#98958D"
	},
	"--dsw-alias-label-primary-bluish": {
		"light": "#3A3835",
		"dark": "#E8E6E1"
	},
	"--dsw-alias-label-deep-diving": {
		"light": "#5B7484",
		"dark": "#A4BAC3"
	},
	"--dsw-alias-label-deep-diving-shimmer": {
		"light": "#7E99A8",
		"dark": "#C5D4DA"
	},
	"--dsw-alias-label-shimmer": {
		"light": "color-mix(in srgb, #3A3835 30%, transparent)",
		"dark": "color-mix(in srgb, #E8E6E1 45%, transparent)"
	},
	"--dsw-alias-brand-primary": {
		"light": "#5B7484",
		"dark": "#B9CBD4"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		"light": "#5B7484",
		"dark": "#B9CBD4"
	},
	"--dsw-alias-onboarding-accent": {
		"light": "#5B7484",
		"dark": "#B9CBD4"
	},
	"--dsw-alias-bg-document-selection": {
		"light": "color-mix(in srgb, #7E99A8 35%, transparent)",
		"dark": "color-mix(in srgb, #7E99A8 40%, transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		"light": "#E0DEDA",
		"dark": "#353433"
	},
	"--dsw-alias-markdown-code-block": {
		"light": "#E5E3DE",
		"dark": "#292826"
	},
	"--dsw-alias-markdown-code-block-banner": {
		"light": "#DEDCD6",
		"dark": "#302F2D"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		"light": "#E2E0DA",
		"dark": "#252422"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		"light": "#F0EFEB",
		"dark": "#343331"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		"light": "#C5C3BC",
		"dark": "#4A4945"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		"light": "#BDBBB4",
		"dark": "#51504C"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		"light": "#AEACA5",
		"dark": "#585754"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		"light": "#A5A39C",
		"dark": "#5F5E5A"
	},
	"--dsw-alias-interactive-bg-hover": {
		"light": "#3A38350D",
		"dark": "#FFFFFF14"
	},
	"--dsw-alias-interactive-bg-active": {
		"light": "#3A383517",
		"dark": "#FFFFFF1F"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		"light": "#3A383520",
		"dark": "#FFFFFF29"
	},
	"--dsw-linear-gradient-think": {
		"light": "linear-gradient(180deg, #E9E7E2 20.19%, #E9E7E200 100%)",
		"dark": "linear-gradient(180deg, #252422 20.19%, #25242200 100%)"
	},
	"--dsw-linear-think-select": {
		"light": "linear-gradient(180deg, #E0DEDA 20.19%, #E0DEDA00 100%)",
		"dark": "linear-gradient(180deg, #302F2C 20.19%, #302F2C00 100%)"
	},
	"--dsw-alias-state-idle-primary": {
		"light": "#C2C0B8",
		"dark": "#5F5E5A"
	},
	"--dsw-alias-onboarding-secondary-fill": {
		"light": "#F5F4F1",
		"dark": "#31404A"
	},
	"--dsw-alias-onboarding-checkbox-border": {
		"light": "color-mix(in srgb, #262523 20%, transparent)",
		"dark": "#FFFFFF1F"
	},
	"--dsw-gradient-onboarding-violet-stops": {
		"light": "#415763 33.102%, #7E99A8 50.954%, #C2D1D7 85.326%, #415763",
		"dark": "#415763 33.102%, #7E99A8 50.954%, #C2D1D7 85.326%, #415763"
	},
	"--dsw-gradient-onboarding-blue-stops": {
		"light": "#5B7484 18.75%, #8AA4AE 51.78%, #D8E2E6 86.252%, #5B7484",
		"dark": "#5B7484 18.75%, #8AA4AE 51.78%, #D8E2E6 86.252%, #5B7484"
	},
	"--dsw-gradient-onboarding-cyan-stops": {
		"light": "#4E6675 21.154%, #849DA9 50.954%, #D0D9D5 85.326%, #4E6675",
		"dark": "#4E6675 21.154%, #849DA9 50.954%, #D0D9D5 85.326%, #4E6675"
	},
	"--shiki-token-constant": {
		"light": "#8A6E8E",
		"dark": "#C4A8C8"
	},
	"--shiki-token-string": {
		"light": "#7A8A6E",
		"dark": "#A8BC9A"
	},
	"--shiki-token-comment": {
		"light": "#716F66",
		"dark": "#98958D"
	},
	"--shiki-token-keyword": {
		"light": "#7A6A8A",
		"dark": "#B8A4C4"
	},
	"--shiki-token-parameter": {
		"light": "#6E6B63",
		"dark": "#A8A69E"
	},
	"--shiki-token-function": {
		"light": "#5B7484",
		"dark": "#A4BAC3"
	},
	"--shiki-token-string-expression": {
		"light": "#7A8A6E",
		"dark": "#A8BC9A"
	},
	"--shiki-token-punctuation": {
		"light": "#8B897F",
		"dark": "#8B897F"
	},
	"--shiki-token-link": {
		"light": "#4E6675",
		"dark": "#B5C7CE"
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
		"light": "0 1px 2px 0 #3A38350A, 0 6px 16px 0 #3A383508",
		"dark": "0 1px 2px 0 #00000014, 0 6px 16px 0 #00000012"
	},
	"--dsw-shadow-lv1-blur": {
		"light": "0 8px 22px 0 #3A38350A",
		"dark": "0 8px 22px 0 #00000014"
	},
	"--dsw-shadow-lv2": {
		"light": "0 2px 6px 0 #3A38350A, 0 12px 32px 0 #3A38350D",
		"dark": "0 2px 6px 0 #00000017, 0 12px 32px 0 #0000001C"
	},
	"--dsw-shadow-lv3": {
		"light": "0 0 0 .5px #3A38350F, 0 12px 32px 0 #3A38350F, 0 32px 64px 0 #3A383514",
		"dark": "0 0 0 .5px #FFFFFF14, 0 12px 32px 0 #0000001F, 0 32px 64px 0 #00000024"
	},
	"--dsw-alias-border-l1": {
		"light": "#3A38350D",
		"dark": "#FFFFFF0D"
	},
	"--dsw-alias-border-l2": {
		"light": "#3A383514",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		"light": "#3A383514",
		"dark": "#FFFFFF0F"
	},
	"--dsw-alias-border-l3": {
		"light": "#3A38351A",
		"dark": "#FFFFFF20"
	},
	"--dsw-alias-border-l4": {
		"light": "#3A383524",
		"dark": "#FFFFFF29"
	},
	"--dsw-elevation-stroke-color": {
		"light": "#3A383512",
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
