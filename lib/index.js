/**
 * dsh-web-skin host entry（Host 侧）。
 * ⚠️ 本文件由 tools/build.mjs 生成，请勿手改（npm run build）。
 *
 * 皮肤本体在客户端（lib/client.js）。Host 侧负责"首帧不闪"：
 *   ① script 行（head、解析阻塞）：读 localStorage 里的皮肤选择，把该皮肤的
 *      画布色写到 documentElement 的两个 CSS 变量上；
 *   ② style 行：与官方 ui-theme 引导样式同结构的六条规则，颜色引用这两个变量
 *      （回退值 = 默认皮肤 minimal）。本行排在 ui-theme 之后，同特异性后写者胜。
 */
export const name = 'dsh-web-skin'

const BOOT_SKINS = {"minimal":["#FBFBFA","#0F0F0E"],"brutalism":["#FFFFFF","#121212"],"morandi":["#EAE8E4","#262523"],"pixel":["#F4EED8","#0F380F"],"solarized":["#FDF6E3","#002B36"],"dracula":["#FAF7F0","#282A36"]}
const STORAGE_KEY = "dsh-web-skin:skin"
const DEFAULT_SKIN = "minimal"
const BOOT_SCRIPT = "(function(){try{var table=" + JSON.stringify(BOOT_SKINS) + ";var id=localStorage.getItem(" + JSON.stringify(STORAGE_KEY) + ")||" + JSON.stringify(DEFAULT_SKIN) + ";var bg=table[id]||table[" + JSON.stringify(DEFAULT_SKIN) + "];var r=document.documentElement.style;r.setProperty('--dsws-boot-l',bg[0]);r.setProperty('--dsws-boot-d',bg[1]);}catch(e){}})();"
const BOOT_CSS = "body{background-color:var(--dsws-boot-l,#FBFBFA);--dsh-boot-bg:var(--dsws-boot-l,#FBFBFA)}@media (prefers-color-scheme:dark){body:not([data-ds-dark-theme]){background-color:var(--dsws-boot-d,#0F0F0E);--dsh-boot-bg:var(--dsws-boot-d,#0F0F0E)}}html[data-ds-theme-source=\"light\"] body,html[data-ds-theme-source=\"system\"] body{background-color:var(--dsws-boot-l,#FBFBFA);--dsh-boot-bg:var(--dsws-boot-l,#FBFBFA)}html[data-ds-theme-source=\"dark\"] body{background-color:var(--dsws-boot-d,#0F0F0E);--dsh-boot-bg:var(--dsws-boot-d,#0F0F0E)}@media (prefers-color-scheme:dark){html[data-ds-theme-source=\"system\"] body{background-color:var(--dsws-boot-d,#0F0F0E);--dsh-boot-bg:var(--dsws-boot-d,#0F0F0E)}}body[data-ds-dark-theme]{background-color:var(--dsws-boot-d,#0F0F0E);--dsh-boot-bg:var(--dsws-boot-d,#0F0F0E)}"

export function apply(ctx) {
	ctx.on('webserver/index-inject', (table) => {
		table.push({ kind: 'script', placement: 'head', text: BOOT_SCRIPT })
		table.push({ kind: 'style', text: BOOT_CSS })
	})
}
