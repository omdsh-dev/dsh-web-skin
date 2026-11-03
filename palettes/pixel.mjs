/**
 * 皮肤「像素 / Pixel」——卡带纸浅色 + Game Boy 绿屏深色，硬边像素风。
 * 本文件是调色板的**唯一事实源**：改完跑 `npm run build` 重新生成 lib/，
 * 再跑 `npm run check` 校验形状与对比度。
 */
export default {
	id: "pixel",
	name: { zh: "像素", en: "Pixel" },
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: ["#F4EED8","#306230"],
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: "#0F380F",
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: {
		light: "::selection{background:#8BAC0F;color:#0F380F}",
		dark: "body[data-ds-dark-theme] ::selection{background:#9BBC0F;color:#0F380F}",
	},
	tokens: {
	"--dsw-static-neutral-bluish-00": {
		"light": "#FFFFFF",
		"dark": "#FFFFFF"
	},
	"--dsw-static-neutral-bluish-50": {
		"light": "#F7F2E2",
		"dark": "#F7F2E2"
	},
	"--dsw-static-neutral-bluish-60": {
		"light": "#F1EADA",
		"dark": "#F1EADA"
	},
	"--dsw-static-neutral-bluish-75": {
		"light": "#EAE1C9",
		"dark": "#EAE1C9"
	},
	"--dsw-static-neutral-bluish-100": {
		"light": "#E0D4B4",
		"dark": "#E0D4B4"
	},
	"--dsw-static-neutral-bluish-150": {
		"light": "#D6C7A0",
		"dark": "#D6C7A0"
	},
	"--dsw-static-neutral-bluish-200": {
		"light": "#C8B684",
		"dark": "#C8B684"
	},
	"--dsw-static-neutral-bluish-300": {
		"light": "#B09B68",
		"dark": "#B09B68"
	},
	"--dsw-static-neutral-bluish-400": {
		"light": "#93805A",
		"dark": "#93805A"
	},
	"--dsw-static-neutral-bluish-500": {
		"light": "#77674A",
		"dark": "#77674A"
	},
	"--dsw-static-neutral-bluish-600": {
		"light": "#5F5340",
		"dark": "#5F5340"
	},
	"--dsw-static-neutral-bluish-700": {
		"light": "#4C4234",
		"dark": "#4C4234"
	},
	"--dsw-static-neutral-bluish-750": {
		"light": "#3D352B",
		"dark": "#3D352B"
	},
	"--dsw-static-neutral-bluish-800": {
		"light": "#322B24",
		"dark": "#322B24"
	},
	"--dsw-static-neutral-bluish-850": {
		"light": "#2A241F",
		"dark": "#2A241F"
	},
	"--dsw-static-neutral-bluish-875": {
		"light": "#241F1B",
		"dark": "#241F1B"
	},
	"--dsw-static-neutral-bluish-900": {
		"light": "#1C1916",
		"dark": "#1C1916"
	},
	"--dsw-static-neutral-bluish-950": {
		"light": "#151312",
		"dark": "#151312"
	},
	"--dsw-static-neutral-bluish-1000": {
		"light": "#100E0D",
		"dark": "#100E0D"
	},
	"--dsw-static-neutral-50": {
		"light": "#F7F2E2",
		"dark": "#F7F2E2"
	},
	"--dsw-static-neutral-100": {
		"light": "#F1EADA",
		"dark": "#F1EADA"
	},
	"--dsw-static-neutral-150": {
		"light": "#EAE1C9",
		"dark": "#EAE1C9"
	},
	"--dsw-static-neutral-200": {
		"light": "#E0D4B4",
		"dark": "#E0D4B4"
	},
	"--dsw-static-neutral-250": {
		"light": "#D6C7A0",
		"dark": "#D6C7A0"
	},
	"--dsw-static-neutral-300": {
		"light": "#C8B684",
		"dark": "#C8B684"
	},
	"--dsw-static-neutral-400": {
		"light": "#93805A",
		"dark": "#93805A"
	},
	"--dsw-static-neutral-500": {
		"light": "#77674A",
		"dark": "#77674A"
	},
	"--dsw-static-neutral-550": {
		"light": "#675A44",
		"dark": "#675A44"
	},
	"--dsw-static-neutral-600": {
		"light": "#544A3A",
		"dark": "#544A3A"
	},
	"--dsw-static-neutral-700": {
		"light": "#3D352B",
		"dark": "#3D352B"
	},
	"--dsw-static-neutral-800": {
		"light": "#2A241F",
		"dark": "#2A241F"
	},
	"--dsw-static-neutral-850": {
		"light": "#241F1B",
		"dark": "#241F1B"
	},
	"--dsw-static-neutral-900": {
		"light": "#151312",
		"dark": "#151312"
	},
	"--dsw-static-neutral-1000": {
		"light": "#0C0B0A",
		"dark": "#0C0B0A"
	},
	"--dsw-static-deepseek-50": {
		"light": "#E9F2D9",
		"dark": "#12300F"
	},
	"--dsw-static-deepseek-100": {
		"light": "#D5E6BD",
		"dark": "#173D12"
	},
	"--dsw-static-deepseek-200": {
		"light": "#BBDB9A",
		"dark": "#1E4D16"
	},
	"--dsw-static-deepseek-300": {
		"light": "#9CC96F",
		"dark": "#306230"
	},
	"--dsw-static-deepseek-400": {
		"light": "#7AB648",
		"dark": "#4E8A22"
	},
	"--dsw-static-deepseek-450": {
		"light": "#62A32E",
		"dark": "#6FA82E"
	},
	"--dsw-static-deepseek-500": {
		"light": "#4E8A22",
		"dark": "#8BAC0F"
	},
	"--dsw-static-deepseek-600": {
		"light": "#41731C",
		"dark": "#9BBC0F"
	},
	"--dsw-static-deepseek-700-delete": {
		"light": "#355D17",
		"dark": "#A8CC3F"
	},
	"--dsw-static-deepseek-800": {
		"light": "#2A4812",
		"dark": "#B8DC6F"
	},
	"--dsw-static-deepseek-900": {
		"light": "#1F340D",
		"dark": "#D0ECA0"
	},
	"--dsw-static-blue-500": {
		"light": "#4E8A22",
		"dark": "#8BAC0F"
	},
	"--dsw-alias-bg-base": {
		"light": "#F4EED8",
		"dark": "#0F380F"
	},
	"--dsw-alias-bg-document-preview": {
		"light": "#EFE7CC",
		"dark": "#0B2A0B"
	},
	"--dsw-alias-bg-layer-1": {
		"light": "#FBF7E8",
		"dark": "#16400F"
	},
	"--dsw-alias-bg-layer-2": {
		"light": "#FFFDF2",
		"dark": "#1B4A12"
	},
	"--dsw-alias-bg-layer-3": {
		"light": "#FFFFFF",
		"dark": "#215414"
	},
	"--dsw-alias-bg-overlay": {
		"light": "#EFE7CC",
		"dark": "#1B4A12"
	},
	"--dsw-alias-bg-module-platform": {
		"light": "#EFE9D2",
		"dark": "#16400F"
	},
	"--dsw-alias-bg-multi-select": {
		"light": "#EAE1C9",
		"dark": "#1B4A12"
	},
	"--dsw-specific-sidebar-fill": {
		"light": "#EFE7CC",
		"dark": "#0B2A0B"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		"light": "#E2D6B2",
		"dark": "#1E4D16"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		"light": "#EAE1C9",
		"dark": "#173D12"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		"light": "#DBCDA6",
		"dark": "#2F6B1E"
	},
	"--dsw-alias-markdown-tag": {
		"light": "#E0D4B4",
		"dark": "#1E4D16"
	},
	"--dsw-specific-selector": {
		"light": "#EFE7CC",
		"dark": "#1B4A12"
	},
	"--dsw-specific-tip": {
		"light": "#EFE7CC",
		"dark": "#1B4A12"
	},
	"--dsw-specific-input-major": {
		"light": "#FFFFFF",
		"dark": "#16400F"
	},
	"--dsw-specific-login-input": {
		"light": "#F7F2E2",
		"dark": "#0F380F"
	},
	"--dsw-specific-bubble": {
		"light": "#E8F0D8",
		"dark": "#16400F"
	},
	"--dsw-specific-bubble-highlight": {
		"light": "#D5E6BD",
		"dark": "#1E4D16"
	},
	"--dsw-menu-surface-fill": {
		"light": "#FBF7E8",
		"dark": "#16400F"
	},
	"--dsw-alias-menu-group-header-fill": {
		"light": "#FBF7E8F2",
		"dark": "#1B4A12F2"
	},
	"--dsw-specific-menu": {
		"light": "#FBF7E8",
		"dark": "#16400F"
	},
	"--dsw-alias-settings-card-fill": {
		"light": "#FAF5E4",
		"dark": "#16400F"
	},
	"--dsw-alias-settings-card-stroke": {
		"light": "#0F380F",
		"dark": "#9BBC0F"
	},
	"--dsw-alias-bg-skeleton": {
		"light": "#0F380F14",
		"dark": "#9BBC0F1F"
	},
	"--dsw-alias-bg-mask-drop": {
		"light": "#F4EED8B3",
		"dark": "#0F380FB3"
	},
	"--dsw-alias-label-secondary": {
		"light": "#4C4234",
		"dark": "#A8CC3F"
	},
	"--dsw-alias-label-tertiary": {
		"light": "#5F5340",
		"dark": "#AACF6A"
	},
	"--dsw-alias-label-caption": {
		"light": "#77674A",
		"dark": "#8BAC0F"
	},
	"--dsw-alias-label-primary-bluish": {
		"light": "#0F380F",
		"dark": "#B8DC6F"
	},
	"--dsw-alias-label-deep-diving": {
		"light": "#4E8A22",
		"dark": "#9BBC0F"
	},
	"--dsw-alias-label-deep-diving-shimmer": {
		"light": "#62A32E",
		"dark": "#B8DC6F"
	},
	"--dsw-alias-label-shimmer": {
		"light": "color-mix(in srgb, #0F380F 30%, transparent)",
		"dark": "color-mix(in srgb, #9BBC0F 45%, transparent)"
	},
	"--dsw-alias-brand-primary": {
		"light": "#306230",
		"dark": "#8BAC0F"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		"light": "#306230",
		"dark": "#8BAC0F"
	},
	"--dsw-alias-onboarding-accent": {
		"light": "#306230",
		"dark": "#8BAC0F"
	},
	"--dsw-alias-bg-document-selection": {
		"light": "color-mix(in srgb, #8BAC0F 40%, transparent)",
		"dark": "color-mix(in srgb, #8BAC0F 45%, transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		"light": "#EAE1C9",
		"dark": "#1E4D16"
	},
	"--dsw-alias-markdown-code-block": {
		"light": "#F1EADA",
		"dark": "#123A0F"
	},
	"--dsw-alias-markdown-code-block-banner": {
		"light": "#E8DDBD",
		"dark": "#1B4A12"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		"light": "#EAE1C9",
		"dark": "#123A0F"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		"light": "#FBF7E8",
		"dark": "#215414"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		"light": "#C8B684",
		"dark": "#306230"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		"light": "#B09B68",
		"dark": "#3D7A2A"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		"light": "#9A8A5C",
		"dark": "#4E8A22"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		"light": "#8A7A50",
		"dark": "#62A32E"
	},
	"--dsw-alias-interactive-bg-hover": {
		"light": "#0F380F0F",
		"dark": "#9BBC0F1A"
	},
	"--dsw-alias-interactive-bg-active": {
		"light": "#0F380F1A",
		"dark": "#9BBC0F2E"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		"light": "#0F380F26",
		"dark": "#9BBC0F40"
	},
	"--dsw-linear-gradient-think": {
		"light": "linear-gradient(180deg, #F1EADA 20.19%, #F1EADA00 100%)",
		"dark": "linear-gradient(180deg, #123A0F 20.19%, #123A0F00 100%)"
	},
	"--dsw-linear-think-select": {
		"light": "linear-gradient(180deg, #EAE1C9 20.19%, #EAE1C900 100%)",
		"dark": "linear-gradient(180deg, #1B4A12 20.19%, #1B4A1200 100%)"
	},
	"--dsw-alias-state-idle-primary": {
		"light": "#B09B68",
		"dark": "#4E8A22"
	},
	"--dsw-alias-onboarding-secondary-fill": {
		"light": "#FBF7E8",
		"dark": "#2F6B1E"
	},
	"--dsw-alias-onboarding-checkbox-border": {
		"light": "#0F380F",
		"dark": "#9BBC0F"
	},
	"--dsw-gradient-onboarding-violet-stops": {
		"light": "#355D17 33.102%, #62A32E 50.954%, #BBDB9A 85.326%, #355D17",
		"dark": "#355D17 33.102%, #62A32E 50.954%, #BBDB9A 85.326%, #355D17"
	},
	"--dsw-gradient-onboarding-blue-stops": {
		"light": "#4E8A22 18.75%, #7AB648 51.78%, #D5E6BD 86.252%, #4E8A22",
		"dark": "#4E8A22 18.75%, #7AB648 51.78%, #D5E6BD 86.252%, #4E8A22"
	},
	"--dsw-gradient-onboarding-cyan-stops": {
		"light": "#2A4812 21.154%, #9CC96F 50.954%, #E9F2D9 85.326%, #2A4812",
		"dark": "#2A4812 21.154%, #9CC96F 50.954%, #E9F2D9 85.326%, #2A4812"
	},
	"--shiki-token-constant": {
		"light": "#41731C",
		"dark": "#8BAC0F"
	},
	"--shiki-token-string": {
		"light": "#2F7A4E",
		"dark": "#7AD0A0"
	},
	"--shiki-token-comment": {
		"light": "#77674A",
		"dark": "#5F8A3F"
	},
	"--shiki-token-keyword": {
		"light": "#0F380F",
		"dark": "#9BBC0F"
	},
	"--shiki-token-parameter": {
		"light": "#5F5340",
		"dark": "#AACF6A"
	},
	"--shiki-token-function": {
		"light": "#2A4812",
		"dark": "#B8DC6F"
	},
	"--shiki-token-string-expression": {
		"light": "#2F7A4E",
		"dark": "#7AD0A0"
	},
	"--shiki-token-punctuation": {
		"light": "#77674A",
		"dark": "#8BAC0F"
	},
	"--shiki-token-link": {
		"light": "#355D17",
		"dark": "#A8CC3F"
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
		"light": "4px 4px 0 0 #0F380F26",
		"dark": "4px 4px 0 0 #00000066"
	},
	"--dsw-shadow-lv1-blur": {
		"light": "4px 4px 0 0 #0F380F1F",
		"dark": "4px 4px 0 0 #00000059"
	},
	"--dsw-shadow-lv2": {
		"light": "6px 6px 0 0 #0F380F33",
		"dark": "6px 6px 0 0 #00000073"
	},
	"--dsw-shadow-lv3": {
		"light": "0 0 0 2px #0F380F, 8px 8px 0 0 #0F380F59",
		"dark": "0 0 0 2px #9BBC0F, 8px 8px 0 0 #00000080"
	},
	"--dsw-alias-border-l1": {
		"light": "#0F380F40",
		"dark": "#9BBC0F40"
	},
	"--dsw-alias-border-l2": {
		"light": "#0F380F80",
		"dark": "#9BBC0F80"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		"light": "#0F380F80",
		"dark": "#9BBC0F59"
	},
	"--dsw-alias-border-l3": {
		"light": "#0F380F",
		"dark": "#9BBC0F"
	},
	"--dsw-alias-border-l4": {
		"light": "#0F380F",
		"dark": "#9BBC0F"
	},
	"--dsw-elevation-stroke-color": {
		"light": "#0F380F",
		"dark": "#9BBC0F"
	},
	"--dsw-font-family": {
		"light": "\"SF Mono\", \"Cascadia Code\", Menlo, \"Courier New\", \"PingFang SC\", \"Noto Sans SC\", monospace",
		"dark": "\"SF Mono\", \"Cascadia Code\", Menlo, \"Courier New\", \"PingFang SC\", \"Noto Sans SC\", monospace"
	},
	"--ds-font-family-code": {
		"light": "\"SF Mono\", \"Cascadia Code\", Menlo, \"Courier New\", monospace",
		"dark": "\"SF Mono\", \"Cascadia Code\", Menlo, \"Courier New\", monospace"
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
