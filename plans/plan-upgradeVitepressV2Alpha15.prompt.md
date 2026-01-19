# Plan: Upgrade VitePress to 2.0.0-alpha.15

目标：将本项目从 `vitepress@^1.6.4` 升级到 `vitepress@2.0.0-alpha.15`（Yarn），并在升级过程中按 VitePress 文档（Context7）核对 v2（alpha）潜在 breaking changes，确保 `docs:dev` / `docs:build` / `docs:serve` 能稳定运行。

## Checklist（高层步骤）
1. **准备与基线**：创建升级分支、确认 Node/Yarn 环境、记录当前可工作状态。
2. **依赖升级**：将 `vitepress` 版本锁定到 `2.0.0-alpha.15`，执行 `yarn install` 更新锁文件。
3. **配置迁移与排错**：对照 v2 文档逐项检查 `.vitepress/config.ts`（尤其是 `themeConfig.outline`、`lastUpdated`、`editLink`）并修复 dev/build 报错。
4. **功能回归**：验证本地开发、生产构建、预览输出与 GitHub Pages 路径（`base`）是否正确。
5. **交付与记录**：补充升级说明、将风险点写入文档，便于后续 alpha → beta/rc 继续升级。

## 当前项目概况（基于仓库文件）
- 包管理器：Yarn（存在 `yarn.lock`）
- Node：`package.json` 约束为 `>=22`
- 入口脚本：
  - `yarn docs:dev` → `vitepress dev docs`
  - `yarn docs:build` → `vitepress build docs`
  - `yarn docs:serve` → `vitepress serve docs`
- 配置文件：`docs/.vitepress/config.ts`（默认主题配置为主，包含 `base`、`themeConfig.outline`、`editLink`、`nav`、`sidebar` 等）

## 详细步骤（可直接照着做）
### 1) 准备与基线
- 新建分支：`chore/upgrade-vitepress-2-alpha15`
- 本地跑一次基线确认（升级前）：
  - `yarn docs:dev`
  - `yarn docs:build`
  - （可选）`yarn docs:serve`
- 记录：当前构建是否有 warning、`base` 路径是否影响静态资源。

### 2) 依赖升级（Yarn）
- 修改 `package.json`：将 `devDependencies.vitepress` 从 `^1.6.4` 改为 **精确版本** `2.0.0-alpha.15`（alpha 版本不建议使用 `^`）。
- 执行依赖更新：`yarn install`
- （可选）如果你希望更严格的锁定策略：建议将 `yarn.lock` 一并纳入 PR，以便 CI/CD 复现。

### 3) 按 v2 文档逐项核对配置（重点：默认主题）
结合 Context7 文档要点：
- `themeConfig.outline`：
  - 文档说明：站点级的 outline 可以设为 `false` 关闭；页面级 frontmatter 的 `outline` 会覆盖 `config.themeConfig.outline.level`。
  - 你的配置里当前使用 `level: 'deep'`。需要在升级后确认 v2 是否仍支持 `'deep'` 字面量（如果报类型/运行错误，可改为数值/区间形式）。
- `lastUpdated`：
  - 文档强调：历史上曾将 Theme Config 的 `lastUpdated` 拆分为 `config.lastUpdated` 与主题里的文本（例如 `themeConfig.lastUpdatedText` / 或 `themeConfig.lastUpdated.text`）。
  - 你的配置里同时存在 `config.lastUpdated: true` 与 `themeConfig.lastUpdated.text`（注意这里属于默认主题配置）。升级后需确认字段是否仍有效；如果只显示开关但不显示文本，优先对照默认主题配置文档进行调整。
- `editLink`：
  - 文档说明：并且页面级 frontmatter `editLink` 可开关 “Edit this page” 链接。
  - 你的配置里使用 `themeConfig.editLink.pattern/text`，升级后验证是否仍生效。
- `base` 与静态资源：
  - 文档说明：VitePress 会自动处理 `base` 对静态资源的影响（尤其是图片）。
  - 你的配置里 `base: "/setup-mac-for-developer/"`，升级后重点验证 GitHub Pages 下资源路径是否正确。

执行方式：
1. `yarn docs:dev` 启动并观察控制台警告/错误。
2. 若 TS 类型报错（`config.ts`）：
   - 优先按 v2 的默认主题配置接口调整字段结构。
   - 若仅是类型定义变更，可考虑增加 `defineConfigWithTheme` 并引入 `DefaultTheme` 类型来更早发现问题（在 alpha 阶段尤其有用）。
3. `yarn docs:build` 确保能产出静态文件。

### 4) 功能回归（必做）
- 页面路由：
  - 首页：`docs/index.md`
  - 指南页：`docs/guide/install/*`
- 导航与侧边栏：确认 `nav` 与 `sidebarGuide()` 渲染是否正常。
- 大纲（outline）：确认右侧目录是否正常显示，且 `level: 'deep'` 预期一致。
- 编辑链接：页面底部 “编辑它” 是否指向正确路径。
- 最后更新时间：是否显示、文本是否为“最后更新时间”。
- 生产预览：`yarn docs:serve` 并随机抽查多页（含图片）。

### 5) 交付与记录
- 在 `docs/README.md` 或根 `README` 记录：
  - 升级前后版本
  - 迁移时调整过的配置项（尤其 `outline` / `lastUpdated` / `editLink` / `base`）
  - 若遇到 alpha bug：记录 workaround 与复现步骤

## 风险与回退策略
- v2 alpha 可能存在回归或未稳定 API：建议 **精确锁版本**，并保留升级分支以便回滚。
- 如果升级后短期内无法稳定：
  - 先回退到 `vitepress@1.6.x`
  - 或改用更稳定的 v2 beta/rc（当官方发布后再跟进）
