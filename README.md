# dsh-web-skin

六合一皮肤包：**极简灰 / 粗野主义 / 莫兰迪 / 像素 / Solarized / Dracula**，
装一个插件，在 设置 → 通用 → **界面皮肤** 里点一下就换，无需刷新、无需重启。
浅色 / 深色 / 跟随系统三档自动切换，选择经 localStorage 持久化。

## 使用

```bash
dsh plugin --profile web add /path/to/dsh-web-skin
```

装完重启一次 DSH（或等 live reload 重组），刷新页面后：

- **换肤**：设置 → 通用 → 界面皮肤，六个色块按钮点哪个换哪个；
- **明暗**：设置 → 外观 → 浅色/深色/跟随系统，每套皮肤都带双档。

## 架构（单包多皮肤）

```
dsh-web-skin/
├── package.json          # dsh 插件声明（inject store/locale/ui-theme/ui-slots）
├── cordis.patch.yml      # 插入 profile 插件层叠（注释即停用）
├── icon.svg
├── palettes/             # ★ 调色板唯一事实源，一套皮肤一个文件
│   ├── minimal.mjs       #   { id, name, swatch, selection, tokens }
│   ├── brutalism.mjs     #   …共 6 套
│   └── …
├── lib/                  # ★ 生成产物（勿手改）
│   ├── client.js         #   客户端：换肤行 + overrideTokens + 样式层
│   └── index.js          #   Host：首帧引导（script 读选择 + style 变量规则）
├── locale/{zh,en}.json
└── tools/
    ├── build.mjs         # palettes/*.mjs → lib/*（npm run build）
    └── check-palette.mjs # 形状 + WCAG 对比度 + 首帧一致性（npm run check）
```

### 改颜色 / 加皮肤

```bash
# 1. 编辑 palettes/<id>.mjs 里的 tokens（或复制一份改名）
# 2. 重新生成
npm run build
# 3. 自检（形状 / 对比度 / 首帧一致）
npm run check
```

link 安装时改的就是源文件：build 完刷新页面即可看到变化。

### 换肤机制

- 调色板经 `ctx.theme.overrideTokens()` 叠加，**换肤 = 同一 source 再覆盖一次**
  （主题服务保证旧层被替换），停用插件即刻回到官方配色；
- 换肤行挂在官方 `settings.general.item` 槽位，React / defineStore 由客户端
  ModuleLoader 共享注入，本包零构建零运行时依赖；
- 皮肤选择存 `localStorage["dsh-web-skin:skin"]`；首帧引导脚本（Host 注入、
  解析阻塞）读同一 key，启动不闪异色。

## 卸载

```bash
dsh plugin --profile web remove dsh-web-skin
```

或注释 `cordis.patch.yml` 里的 `insert` 段，重启即可。

## 版本兼容

| 插件版本 | DSH 版本（实测） |
| --- | --- |
| v0.2.0（六合一） | dsh v0.2.1-rc.5 |
| v0.1.0（单皮肤极简灰） | dsh v0.2.1-rc.5 |

换肤行依赖官方 `settings.general.item` 槽位与共享 React 注入；若上游槽位
变动，皮肤本体仍然生效，只是设置行消失（console 有告警）。

## 致谢

- 机制设计参考 [dsh-leafy-skin](https://github.com/badai147/dsh-leafy-skin)
  （token 覆盖层 + `:where()` 零特异性样式层 + 首帧引导）；
- 设置行与状态写法参考官方 `@deepseek-ai/dsh-client-ui-theme` 的
  Appearance 行与 [dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance)。

## 许可证

[MIT](LICENSE)
