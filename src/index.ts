/**
 * dsh-web-skin host entry（Host 侧）。
 * ⚠️ 本文件（lib/index.js）由 tsc + tools/build.mjs 生成，请勿手改；
 * 源码在 src/index.ts，改色去 palettes/*.mjs，然后 npm run build。
 *
 * 皮肤本体在客户端（lib/client.js）。Host 侧负责"首帧不闪"：
 *   ① script 行（head、解析阻塞）：读 localStorage 里的皮肤选择，把该皮肤的
 *      画布色写到 documentElement 的两个 CSS 变量上；
 *   ② style 行：与官方 ui-theme 引导样式同结构的六条规则，颜色引用这两个变量
 *      （回退值 = 默认皮肤 minimal）。本行排在 ui-theme 之后，同特异性后写者胜。
 */
export const name = 'dsh-web-skin'

/** 首帧画布色表（皮肤 id → [浅色, 深色]）；占位符由 tools/build.mjs 注入 palettes/*.mjs 数据。 */
type BootTable = Record<string, [string, string]>

/** webserver/index-inject 注入表行（本插件只写 script / style 两种）。 */
type IndexInjectRow =
	| { kind: 'script'; placement: 'head' | 'body'; text: string }
	| { kind: 'style'; text: string }

/** Host 侧最小上下文：仅官方 dsh-host-webserver 提供的 webserver/index-inject 事件。 */
interface SkinHostContext {
	on(event: 'webserver/index-inject', listener: (table: IndexInjectRow[]) => void): void
}

const BOOT_SKINS = "@dsh-web-skin/inject:BOOT_SKINS" as unknown as BootTable
const STORAGE_KEY = "dsh-web-skin:skin"
const DEFAULT_SKIN = "minimal"
const BOOT_SCRIPT = "(function(){try{var table=" + JSON.stringify(BOOT_SKINS) + ";var id=localStorage.getItem(" + JSON.stringify(STORAGE_KEY) + ")||" + JSON.stringify(DEFAULT_SKIN) + ";var bg=table[id]||table[" + JSON.stringify(DEFAULT_SKIN) + "];var r=document.documentElement.style;r.setProperty('--dsws-boot-l',bg[0]);r.setProperty('--dsws-boot-d',bg[1]);}catch(e){}})();"
const BOOT_CSS = "@dsh-web-skin/inject:BOOT_CSS"

export function apply(ctx: SkinHostContext) {
	ctx.on('webserver/index-inject', (table) => {
		table.push({ kind: 'script', placement: 'head', text: BOOT_SCRIPT })
		table.push({ kind: 'style', text: BOOT_CSS })
	})
}
