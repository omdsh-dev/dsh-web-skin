# dsh-web-skin

> [中文](README.zh.md) | **English**

Six-in-one skin pack for the DeepSeek Harness web GUI: **Minimal / Brutalism / Morandi / Pixel / Solarized / Dracula**. Install one plugin, switch skins from Settings → General → **Interface skin** with a single click — no refresh, no restart. Every skin ships light + dark variants and follows the light/dark/system appearance setting; the choice persists in localStorage.

## Features

- **Six skins in one package** — Minimal (paper-white neutral gray), Brutalism (hard borders, zero radius), Morandi (muted warm grays), Pixel (Game Boy greens), Solarized (canonical sixteen-color port), Dracula.
- **Settings-page switcher** — six swatch buttons under Settings → General → Interface skin; click to switch instantly, no reload.
- **Light / dark / system** — every palette carries paired `{ light, dark }` token values and follows the official appearance setting.
- **No first-frame flash** — the host half injects a parser-blocking boot script that reads the saved skin and paints the canvas color before first paint.
- **Zero runtime dependencies** — React and `defineStore` are shared through the client ModuleLoader; palettes are layered onto the official theme via `ctx.theme.overrideTokens()`, so disabling the plugin instantly restores the stock theme.
- **WCAG-checked palettes** — `npm run check` validates token shape and key text/background contrast pairs for every skin.

## Compatibility

| Plugin version | DSH version (tested) |
| --- | --- |
| v0.2.0 (six-in-one) | dsh v0.2.1-rc.5 |
| v0.1.0 (single Minimal skin) | dsh v0.2.1-rc.5 |

The settings row depends on the official `settings.general.item` slot and the shared React injection; if that slot changes upstream, skins themselves keep working — only the settings row disappears (with a console warning).

## Install

Published releases carry the compiled, palette-injected `lib/` output, so the
tarball needs no build:

```sh
dsh plugin --profile web add "https://github.com/omdsh-dev/dsh-web-skin/releases/latest/download/pkg.tgz"
```

For local development:

```sh
npm install --legacy-peer-deps && npm run build   # first time only: tsc + palette injection
dsh plugin --profile web add /path/to/dsh-web-skin
```

Restart DSH once (or wait for live reload to regroup), then refresh the page.

## Configure / Usage

- **Switch skin**: Settings → General → Interface skin — click any of the six swatch buttons.
- **Light/dark**: Settings → Appearance → light/dark/system; every skin has both variants.
- **Uninstall**: `dsh plugin --profile web remove dsh-web-skin`, or comment out the `insert` block in `cordis.patch.yml` and restart.

## Development

Source is TypeScript (`src/`); `lib/` is generated — `tsc` output with palette data injected by `tools/build.mjs` (`npm run build` runs both, in that order). Never edit `lib/` by hand.

```
dsh-web-skin/
├── package.json          # dsh plugin manifest (inject store/locale/ui-theme/ui-slots)
├── cordis.patch.yml      # profile plugin-stack insert row (comment out to disable)
├── tsconfig.json         # tsc config (strict)
├── icon.svg
├── palettes/             # ★ single source of truth for palettes, one file per skin
│   ├── minimal.mjs       #   { id, name, swatch, selection, tokens }
│   ├── brutalism.mjs     #   …6 skins total
│   ├── index.d.ts        #   TypeScript declarations for the palette shape
│   └── …
├── src/                  # ★ TypeScript source (edit code here)
│   ├── client.ts         #   client: skin row + overrideTokens + style layer
│   └── index.ts          #   host: first-frame boot (script reads choice + style rules)
├── lib/                  # ★ generated output (do not edit)
├── locale/{zh,en}.json
└── tools/
    ├── build.mjs         # palettes/*.mjs → inject into lib/* placeholders
    └── check-palette.mjs # shape + WCAG contrast + boot-table consistency (npm run check)
```

### Editing colors / adding a skin

```sh
# 1. Edit tokens in palettes/<id>.mjs (or copy one and rename it)
# 2. Regenerate (tsc compiles src/, then palette data is injected into lib/)
npm run build
# 3. Self-check (shape / contrast / boot-table consistency)
npm run check
```

With a link install the checked-out files are the live ones: rebuild and refresh the page to see changes. During development you can also use `npm run dev` (tsc watch) plus `node tools/build.mjs`, and `npm run typecheck` for a no-emit strict check.

### How skinning works

- Palettes are layered via `ctx.theme.overrideTokens()`; **switching skins = overriding again from the same source** (the theme service guarantees the old layer is replaced), and disabling the plugin restores the stock theme.
- The skin row hangs off the official `settings.general.item` slot; React / `defineStore` are shared through the client ModuleLoader, so the package has zero runtime dependencies.
- The skin choice lives in `localStorage["dsh-web-skin:skin"]`; the first-frame boot script (host-injected, parser-blocking) reads the same key so startup never flashes the wrong color.

## Acknowledgments

- Mechanism design inspired by [dsh-leafy-skin](https://github.com/badai147/dsh-leafy-skin) (token override layer + `:where()` zero-specificity style layer + first-frame boot).
- The settings row and store usage follow the official `@deepseek-ai/dsh-client-ui-theme` Appearance row and [dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance).

## License

[MIT](LICENSE)
