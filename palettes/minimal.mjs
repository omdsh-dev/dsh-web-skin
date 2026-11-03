/**
 * 皮肤「极简灰 / Minimal」——纸白/墨黑中性灰，单色墨强调，发丝边框（Vercel/Linear 风）。
 * 本文件是调色板的**唯一事实源**：改完跑 `npm run build` 重新生成 lib/，
 * 再跑 `npm run check` 校验形状与对比度。
 */
export default {
	id: "minimal",
	name: { zh: "极简灰", en: "Minimal" },
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: ["#FBFBFA","#1A1A18"],
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: "#171715",
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: {
		light: "::selection{background:#DBDBD7;color:#171715}",
		dark: "body[data-ds-dark-theme] ::selection{background:#373734;color:#F5F5F3}",
	},
	tokens: {
	"--dsw-static-neutral-bluish-00": {
		"light": "#FFFFFF",
		"dark": "#FFFFFF"
	},
	"--dsw-static-neutral-bluish-50": {
		"light": "#FBFBFA",
		"dark": "#FBFBFA"
	},
	"--dsw-static-neutral-bluish-60": {
		"light": "#F7F7F5",
		"dark": "#F7F7F5"
	},
	"--dsw-static-neutral-bluish-75": {
		"light": "#F3F3F1",
		"dark": "#F3F3F1"
	},
	"--dsw-static-neutral-bluish-100": {
		"light": "#ECECEA",
		"dark": "#ECECEA"
	},
	"--dsw-static-neutral-bluish-150": {
		"light": "#E5E5E2",
		"dark": "#E5E5E2"
	},
	"--dsw-static-neutral-bluish-200": {
		"light": "#DBDBD7",
		"dark": "#DBDBD7"
	},
	"--dsw-static-neutral-bluish-300": {
		"light": "#C6C6C1",
		"dark": "#C6C6C1"
	},
	"--dsw-static-neutral-bluish-400": {
		"light": "#A6A6A1",
		"dark": "#A6A6A1"
	},
	"--dsw-static-neutral-bluish-500": {
		"light": "#8A8A85",
		"dark": "#8A8A85"
	},
	"--dsw-static-neutral-bluish-600": {
		"light": "#6E6E6A",
		"dark": "#6E6E6A"
	},
	"--dsw-static-neutral-bluish-700": {
		"light": "#5A5A56",
		"dark": "#5A5A56"
	},
	"--dsw-static-neutral-bluish-750": {
		"light": "#464642",
		"dark": "#464642"
	},
	"--dsw-static-neutral-bluish-800": {
		"light": "#373734",
		"dark": "#373734"
	},
	"--dsw-static-neutral-bluish-850": {
		"light": "#2C2C2A",
		"dark": "#2C2C2A"
	},
	"--dsw-static-neutral-bluish-875": {
		"light": "#252523",
		"dark": "#252523"
	},
	"--dsw-static-neutral-bluish-900": {
		"light": "#1C1C1A",
		"dark": "#1C1C1A"
	},
	"--dsw-static-neutral-bluish-950": {
		"light": "#151514",
		"dark": "#151514"
	},
	"--dsw-static-neutral-bluish-1000": {
		"light": "#0F0F0E",
		"dark": "#0F0F0E"
	},
	"--dsw-static-neutral-50": {
		"light": "#FBFBFA",
		"dark": "#FBFBFA"
	},
	"--dsw-static-neutral-100": {
		"light": "#F7F7F5",
		"dark": "#F7F7F5"
	},
	"--dsw-static-neutral-150": {
		"light": "#F1F1EE",
		"dark": "#F1F1EE"
	},
	"--dsw-static-neutral-200": {
		"light": "#ECECEA",
		"dark": "#ECECEA"
	},
	"--dsw-static-neutral-250": {
		"light": "#E5E5E2",
		"dark": "#E5E5E2"
	},
	"--dsw-static-neutral-300": {
		"light": "#DBDBD7",
		"dark": "#DBDBD7"
	},
	"--dsw-static-neutral-400": {
		"light": "#A6A6A1",
		"dark": "#A6A6A1"
	},
	"--dsw-static-neutral-500": {
		"light": "#8A8A85",
		"dark": "#8A8A85"
	},
	"--dsw-static-neutral-550": {
		"light": "#6E6E6A",
		"dark": "#6E6E6A"
	},
	"--dsw-static-neutral-600": {
		"light": "#5A5A56",
		"dark": "#5A5A56"
	},
	"--dsw-static-neutral-700": {
		"light": "#464642",
		"dark": "#464642"
	},
	"--dsw-static-neutral-800": {
		"light": "#2C2C2A",
		"dark": "#2C2C2A"
	},
	"--dsw-static-neutral-850": {
		"light": "#252523",
		"dark": "#252523"
	},
	"--dsw-static-neutral-900": {
		"light": "#151514",
		"dark": "#151514"
	},
	"--dsw-static-neutral-1000": {
		"light": "#0A0A09",
		"dark": "#0A0A09"
	},
	"--dsw-static-deepseek-50": {
		"light": "#F3F3F1",
		"dark": "#1E1E1C"
	},
	"--dsw-static-deepseek-100": {
		"light": "#EAEAE7",
		"dark": "#242422"
	},
	"--dsw-static-deepseek-200": {
		"light": "#DCDCD8",
		"dark": "#2E2E2B"
	},
	"--dsw-static-deepseek-300": {
		"light": "#B9B9B4",
		"dark": "#484844"
	},
	"--dsw-static-deepseek-400": {
		"light": "#969690",
		"dark": "#71716B"
	},
	"--dsw-static-deepseek-450": {
		"light": "#7F7F79",
		"dark": "#8F8F89"
	},
	"--dsw-static-deepseek-500": {
		"light": "#3A3A36",
		"dark": "#CFCFC9"
	},
	"--dsw-static-deepseek-600": {
		"light": "#2C2C29",
		"dark": "#DBDBD6"
	},
	"--dsw-static-deepseek-700-delete": {
		"light": "#222220",
		"dark": "#E6E6E1"
	},
	"--dsw-static-deepseek-800": {
		"light": "#1A1A18",
		"dark": "#EFEFEB"
	},
	"--dsw-static-deepseek-900": {
		"light": "#121211",
		"dark": "#F7F7F5"
	},
	"--dsw-static-blue-500": {
		"light": "#3A3A36",
		"dark": "#CFCFC9"
	},
	"--dsw-alias-bg-base": {
		"light": "#FBFBFA",
		"dark": "#0F0F0E"
	},
	"--dsw-alias-bg-document-preview": {
		"light": "#F6F6F4",
		"dark": "#0A0A09"
	},
	"--dsw-alias-bg-layer-1": {
		"light": "#FFFFFF",
		"dark": "#161614"
	},
	"--dsw-alias-bg-layer-2": {
		"light": "#FFFFFF",
		"dark": "#1C1C1A"
	},
	"--dsw-alias-bg-layer-3": {
		"light": "#FFFFFF",
		"dark": "#232321"
	},
	"--dsw-alias-bg-overlay": {
		"light": "#F3F3F1",
		"dark": "#1E1E1C"
	},
	"--dsw-alias-bg-module-platform": {
		"light": "#F5F5F3",
		"dark": "#1C1C1A"
	},
	"--dsw-alias-bg-multi-select": {
		"light": "#EFEFEC",
		"dark": "#1A1A18"
	},
	"--dsw-specific-sidebar-fill": {
		"light": "#F5F5F3",
		"dark": "#0A0A09"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		"light": "#EBEBE8",
		"dark": "#222220"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		"light": "#F0F0ED",
		"dark": "#191917"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		"light": "#E3E3DE",
		"dark": "#2A2A27"
	},
	"--dsw-alias-markdown-tag": {
		"light": "#E7E7E3",
		"dark": "#262624"
	},
	"--dsw-specific-selector": {
		"light": "#F3F3F1",
		"dark": "#1E1E1C"
	},
	"--dsw-specific-tip": {
		"light": "#F3F3F1",
		"dark": "#1E1E1C"
	},
	"--dsw-specific-input-major": {
		"light": "#FFFFFF",
		"dark": "#161614"
	},
	"--dsw-specific-login-input": {
		"light": "#F7F7F5",
		"dark": "#121211"
	},
	"--dsw-specific-bubble": {
		"light": "#F1F1EE",
		"dark": "#1A1A18"
	},
	"--dsw-specific-bubble-highlight": {
		"light": "#E8E8E3",
		"dark": "#232321"
	},
	"--dsw-menu-surface-fill": {
		"light": "#FBFBFA94",
		"dark": "#19191780"
	},
	"--dsw-alias-menu-group-header-fill": {
		"light": "#FBFBFAF0",
		"dark": "#1C1C1AF0"
	},
	"--dsw-specific-menu": {
		"light": "#FBFBFA94",
		"dark": "#19191780"
	},
	"--dsw-alias-settings-card-fill": {
		"light": "#FDFDFC",
		"dark": "#191917"
	},
	"--dsw-alias-settings-card-stroke": {
		"light": "#17171514",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-bg-skeleton": {
		"light": "#1717150A",
		"dark": "#F5F5F314"
	},
	"--dsw-alias-bg-mask-drop": {
		"light": "#FBFBFAB3",
		"dark": "#191917B3"
	},
	"--dsw-alias-label-secondary": {
		"light": "#52524E",
		"dark": "#A8A8A2"
	},
	"--dsw-alias-label-tertiary": {
		"light": "#6E6E6A",
		"dark": "#8C8C86"
	},
	"--dsw-alias-label-caption": {
		"light": "#8F8F8A",
		"dark": "#8F8F89"
	},
	"--dsw-alias-label-primary-bluish": {
		"light": "#1A1A18",
		"dark": "#E8E8E4"
	},
	"--dsw-alias-label-deep-diving": {
		"light": "#3A3A36",
		"dark": "#CFCFC9"
	},
	"--dsw-alias-label-deep-diving-shimmer": {
		"light": "#6E6E6A",
		"dark": "#E3E3DE"
	},
	"--dsw-alias-label-shimmer": {
		"light": "color-mix(in srgb, #1A1A18 30%, transparent)",
		"dark": "color-mix(in srgb, #E8E8E4 45%, transparent)"
	},
	"--dsw-alias-brand-primary": {
		"light": "#1A1A18",
		"dark": "#E8E8E4"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		"light": "#1A1A18",
		"dark": "#E8E8E4"
	},
	"--dsw-alias-onboarding-accent": {
		"light": "#1A1A18",
		"dark": "#E8E8E4"
	},
	"--dsw-alias-bg-document-selection": {
		"light": "color-mix(in srgb, #8A8A85 35%, transparent)",
		"dark": "color-mix(in srgb, #8A8A85 40%, transparent)"
	},
	"--dsw-alias-markdown-inline-code": {
		"light": "#EDEDE9",
		"dark": "#242422"
	},
	"--dsw-alias-markdown-code-block": {
		"light": "#F3F3F1",
		"dark": "#161614"
	},
	"--dsw-alias-markdown-code-block-banner": {
		"light": "#EBEBE8",
		"dark": "#1E1E1C"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		"light": "#ECECE9",
		"dark": "#141412"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		"light": "#FFFFFF",
		"dark": "#1E1E1C"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		"light": "#CFCFCA",
		"dark": "#3A3A36"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		"light": "#C6C6C1",
		"dark": "#42423E"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		"light": "#B9B9B4",
		"dark": "#464642"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		"light": "#AFAFAA",
		"dark": "#4C4C48"
	},
	"--dsw-alias-interactive-bg-hover": {
		"light": "#1717150A",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-interactive-bg-active": {
		"light": "#17171514",
		"dark": "#FFFFFF24"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		"light": "#1717151A",
		"dark": "#FFFFFF2E"
	},
	"--dsw-linear-gradient-think": {
		"light": "linear-gradient(180deg, #F5F5F3 20.19%, #F5F5F300 100%)",
		"dark": "linear-gradient(180deg, #121211 20.19%, #12121100 100%)"
	},
	"--dsw-linear-think-select": {
		"light": "linear-gradient(180deg, #EFEFEC 20.19%, #EFEFEC00 100%)",
		"dark": "linear-gradient(180deg, #1A1A18 20.19%, #1A1A1800 100%)"
	},
	"--dsw-alias-state-idle-primary": {
		"light": "#C6C6C1",
		"dark": "#4C4C48"
	},
	"--dsw-alias-onboarding-secondary-fill": {
		"light": "#FFFFFF",
		"dark": "#242422"
	},
	"--dsw-alias-onboarding-checkbox-border": {
		"light": "color-mix(in srgb, #0F0F0E 20%, transparent)",
		"dark": "#FFFFFF1F"
	},
	"--dsw-gradient-onboarding-violet-stops": {
		"light": "#1A1A18 33.102%, #6E6E6A 50.954%, #DBDBD7 85.326%, #1A1A18",
		"dark": "#1A1A18 33.102%, #6E6E6A 50.954%, #DBDBD7 85.326%, #1A1A18"
	},
	"--dsw-gradient-onboarding-blue-stops": {
		"light": "#3A3A36 18.75%, #8A8A85 51.78%, #E5E5E2 86.252%, #3A3A36",
		"dark": "#3A3A36 18.75%, #8A8A85 51.78%, #E5E5E2 86.252%, #3A3A36"
	},
	"--dsw-gradient-onboarding-cyan-stops": {
		"light": "#252523 21.154%, #7F7F79 50.954%, #D5D5D0 85.326%, #252523",
		"dark": "#252523 21.154%, #7F7F79 50.954%, #D5D5D0 85.326%, #252523"
	},
	"--shiki-token-constant": {
		"light": "#1A1A18",
		"dark": "#E8E8E4"
	},
	"--shiki-token-string": {
		"light": "#4A6A8A",
		"dark": "#A8C0D8"
	},
	"--shiki-token-comment": {
		"light": "#8A8A85",
		"dark": "#6E6E6A"
	},
	"--shiki-token-keyword": {
		"light": "#1A1A18",
		"dark": "#E8E8E4"
	},
	"--shiki-token-parameter": {
		"light": "#6E6E6A",
		"dark": "#B0B0AA"
	},
	"--shiki-token-function": {
		"light": "#2C2C29",
		"dark": "#D6D6D1"
	},
	"--shiki-token-string-expression": {
		"light": "#4A6A8A",
		"dark": "#A8C0D8"
	},
	"--shiki-token-punctuation": {
		"light": "#8A8A85",
		"dark": "#8A8A85"
	},
	"--shiki-token-link": {
		"light": "#3D5A80",
		"dark": "#9BB8D6"
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
		"light": "16px",
		"dark": "16px"
	},
	"--dsw-radius-panel": {
		"light": "16px",
		"dark": "16px"
	},
	"--dsw-shadow-lv1": {
		"light": "0 1px 2px 0 #17171508, 0 4px 12px 0 #17171508",
		"dark": "0 1px 2px 0 #00000014, 0 4px 12px 0 #00000012"
	},
	"--dsw-shadow-lv1-blur": {
		"light": "0 6px 18px 0 #1717150A",
		"dark": "0 6px 18px 0 #00000014"
	},
	"--dsw-shadow-lv2": {
		"light": "0 2px 6px 0 #1717150A, 0 10px 28px 0 #1717150D",
		"dark": "0 2px 6px 0 #00000017, 0 10px 28px 0 #0000001C"
	},
	"--dsw-shadow-lv3": {
		"light": "0 0 0 .5px #1717150F, 0 10px 28px 0 #1717150F, 0 28px 56px 0 #17171514",
		"dark": "0 0 0 .5px #FFFFFF14, 0 10px 28px 0 #0000001F, 0 28px 56px 0 #00000024"
	},
	"--dsw-alias-border-l1": {
		"light": "#1717150A",
		"dark": "#FFFFFF0D"
	},
	"--dsw-alias-border-l2": {
		"light": "#17171514",
		"dark": "#FFFFFF17"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		"light": "#17171514",
		"dark": "#FFFFFF0F"
	},
	"--dsw-alias-border-l3": {
		"light": "#1717151A",
		"dark": "#FFFFFF20"
	},
	"--dsw-alias-border-l4": {
		"light": "#17171524",
		"dark": "#FFFFFF29"
	},
	"--dsw-elevation-stroke-color": {
		"light": "#17171512",
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
