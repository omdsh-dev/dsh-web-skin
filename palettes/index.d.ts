/**
 * palettes/*.mjs 的类型声明。调色板是纯数据 .mjs（唯一事实源，不进 tsc 编译），
 * 本文件给出 src/*.ts 引用的形状；改形状时同步本文件与 tools/check-palette.mjs。
 */

/** 一条设计 token 的浅色/深色成对值。 */
export interface TokenPair {
	light: string;
	dark: string;
}

/** 设计 token 表：CSS 自定义属性名（-- 开头）→ 浅/深成对值。 */
export interface SkinTokens {
	[name: string]: TokenPair;
}

/** 一套皮肤调色板（palettes/<id>.mjs 的 default export 形状）。 */
export interface Palette {
	id: string;
	name: { zh: string; en: string };
	/** 设置页色块：左半 = 浅色画布，右半 = 品牌强调色。 */
	swatch: [string, string];
	/** 自检用：深色模式下主按钮上的文字色。 */
	brandTextDark: string;
	/** ::selection 两条规则（浅色 / 深色），写进样式层。 */
	selection: { light: string; dark: string };
	tokens: SkinTokens;
}
