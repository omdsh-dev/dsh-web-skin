#!/usr/bin/env node
/**
 * dsh-web-skin 构建器：palettes/*.mjs（唯一事实源）→ 注入 tsc 产物
 * lib/client.js + lib/index.js 里的占位符（npm run build 先跑 tsc，再跑本脚本）。
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

const L = FALLBACK[0], D = FALLBACK[1]
const bootCss = [
	`body{background-color:var(--dsws-boot-l,${L});--dsh-boot-bg:var(--dsws-boot-l,${L})}`,
	`@media (prefers-color-scheme:dark){body:not([data-ds-dark-theme]){background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}}`,
	`html[data-ds-theme-source="light"] body,html[data-ds-theme-source="system"] body{background-color:var(--dsws-boot-l,${L});--dsh-boot-bg:var(--dsws-boot-l,${L})}`,
	`html[data-ds-theme-source="dark"] body{background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}`,
	`@media (prefers-color-scheme:dark){html[data-ds-theme-source="system"] body{background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}}`,
	`body[data-ds-dark-theme]{background-color:var(--dsws-boot-d,${D});--dsh-boot-bg:var(--dsws-boot-d,${D})}`,
].join('')

// ── 注入：把调色板数据原位替换进 tsc 产物的占位符 ────────────────────────────
// src/*.ts 里调色板派生常量是字符串占位符（"@dsh-web-skin/inject:<名>"），
// tsc 原样搬进 lib/；这里把带引号的占位符整体换成 JSON.stringify 的数据。
// 每个占位符必须恰好出现一次，否则说明 tsc 产物漂移（或忘了先跑 tsc），直接报错。
function inject(file, table) {
	let text
	try {
		text = readFileSync(file, 'utf8')
	} catch {
		throw new Error(`读不到 ${file}——npm run build 会先跑 tsc 生成它，请用 npm run build 而不是单独跑本脚本`)
	}
	for (const [sentinel, payload] of table) {
		const marker = JSON.stringify(sentinel)
		const occurrences = text.split(marker).length - 1
		if (occurrences !== 1) throw new Error(`${file} 占位符 ${sentinel} 出现 ${occurrences} 次（应为 1）——先跑 tsc`)
		text = text.split(marker).join(JSON.stringify(payload))
	}
	writeFileSync(file, text)
}

inject(join(root, 'lib', 'client.js'), [
	['@dsh-web-skin/inject:SKIN_ORDER', SKIN_ORDER],
	['@dsh-web-skin/inject:SKINS', clientSkins],
	['@dsh-web-skin/inject:DICT', dict],
])
inject(join(root, 'lib', 'index.js'), [
	['@dsh-web-skin/inject:BOOT_SKINS', bootTable],
	['@dsh-web-skin/inject:BOOT_CSS', bootCss],
])

console.log('✓ lib/client.js  (', SKIN_ORDER.length, '套皮肤 )')
console.log('✓ lib/index.js   ( 首帧引导:', SKIN_ORDER.map((id) => `${id}=${bootTable[id].join('/')}`).join(' '), ')')
console.log('done — 接着跑 npm run check')
