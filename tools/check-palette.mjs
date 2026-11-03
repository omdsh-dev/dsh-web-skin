#!/usr/bin/env node
/**
 * dsh-web-skin 调色板自检（零依赖）：node tools/check-palette.mjs
 *
 * 对 palettes/*.mjs 逐套校验：
 *   ① token 形状——键以 -- 开头，值是 { light, dark } 成对字符串；
 *   ② 关键"文字 vs 背景"配对的 WCAG 对比度（浅、深两档）；
 *   ③ lib/index.js 的 BOOT_SKINS 首帧表与各套 --dsw-alias-bg-base 一致
 *      （不一致 = 改完调色板没跑 npm run build）。
 */
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const palettesDir = join(root, 'palettes')

let errors = 0
const ok = (msg) => console.log('✓ ' + msg)
const bad = (msg) => { errors++; console.error('✗ ' + msg) }

function rgb(hex) {
	const m = /^#([0-9a-f]{3,8})$/i.exec(String(hex).trim())
	if (!m) return null
	let h = m[1]
	if (h.length === 3) h = [...h].map((c) => c + c).join('')
	if (h.length === 8) h = h.slice(0, 6)
	if (h.length !== 6) return null
	return [0, 2, 4].map((o) => parseInt(h.slice(o, o + 2), 16) / 255)
}
function lum([r, g, b]) {
	const f = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
	return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}
function contrast(a, b) {
	const [hi, lo] = [lum(a), lum(b)].sort((p, q) => q - p)
	return (hi + 0.05) / (lo + 0.05)
}

const bootExpected = {}
let checked = 0
for (const file of readdirSync(palettesDir).sort()) {
	if (!file.endsWith('.mjs')) continue
	const skin = (await import(pathToFileURL(join(palettesDir, file)).href)).default
	checked++
	console.log(`\n■ ${skin.id}（${Object.keys(skin.tokens).length} tokens）`)

	for (const [key, v] of Object.entries(skin.tokens)) {
		if (!key.startsWith('--')) bad(`${skin.id} 键名不是 CSS 变量：${key}`)
		if (!v || typeof v.light !== 'string' || typeof v.dark !== 'string') {
			bad(`${skin.id} 缺 { light, dark } 成对值：${key}`)
		}
	}
	ok('token 形状')

	const PAIRS = [
		['--dsw-alias-label-primary-bluish', '--dsw-alias-bg-base', 7, '正文'],
		['--dsw-alias-label-secondary', '--dsw-alias-bg-base', 4.5, '次要文字'],
		['--dsw-alias-label-tertiary', '--dsw-alias-bg-base', 4.5, '三级文字'],
		['--dsw-alias-label-caption', '--dsw-alias-bg-base', 3, '说明文字（刻意弱化）'],
		['--dsw-alias-brand-primary', { light: '#FFFFFF', dark: skin.brandTextDark }, 4.5, '主按钮文字/底色'],
		['--shiki-token-comment', '--dsw-alias-markdown-code-block', 3, '代码注释（刻意弱化）'],
	]
	const resolve = (ref, mode) => {
		if (typeof ref === 'object' && ref !== null) return ref[mode]
		if (ref in skin.tokens) return skin.tokens[ref][mode]
		return ref
	}
	for (const mode of ['light', 'dark']) {
		for (const [fgRef, bgRef, min, label] of PAIRS) {
			const F = rgb(resolve(fgRef, mode))
			const B = rgb(resolve(bgRef, mode))
			if (!F || !B) { console.log(`· 跳过（非纯色）：${label} [${mode}]`); continue }
			const c = contrast(F, B)
			if (c >= min) ok(`${label} [${mode}] ${c.toFixed(2)}:1 ≥ ${min}:1`)
			else bad(`${skin.id} ${label} [${mode}] ${c.toFixed(2)}:1 < ${min}:1`)
		}
	}

	bootExpected[skin.id] = [skin.tokens['--dsw-alias-bg-base'].light, skin.tokens['--dsw-alias-bg-base'].dark]
}

// ── ③ 首帧表一致 ───────────────────────────────────────────────────────────
console.log('\n■ 首帧引导（lib/index.js BOOT_SKINS）')
const host = readFileSync(join(root, 'lib', 'index.js'), 'utf8')
const m = /const BOOT_SKINS = (\{[^\n]*\})/.exec(host)
if (!m) {
	bad('lib/index.js 缺少 BOOT_SKINS 常量——先跑 npm run build')
} else {
	const table = JSON.parse(m[1])
	for (const [id, expect] of Object.entries(bootExpected)) {
		const got = table[id]
		if (got?.[0] === expect[0] && got?.[1] === expect[1]) {
			ok(`${id} 首帧色一致`)
		} else {
			bad(`${id} 首帧色不一致：index.js [${got}] ≠ palettes [${expect}]——重跑 npm run build`)
		}
	}
}

if (checked === 0) bad('palettes/ 里没有任何 .mjs')
if (errors) { console.error(`\n${errors} 项未通过`); process.exit(1) }
console.log('\n全部通过 ✅')
