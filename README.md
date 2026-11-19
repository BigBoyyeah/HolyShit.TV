# HolyShit.TV — 主页（Tailwind 版）

静态站点，Tailwind 编译成单文件 CSS，无运行时依赖。

```
index.html            # 页面（约 34KB）
assets/tailwind.css   # 编译产物，15KB，只有用到的类
assets/*.jpg          # 主视觉 + 概念图 + og 图（共 1.3MB）
tailwind.config.js
input.css
package.json
robots.txt / sitemap.xml
```

## 本地开发

```bash
npm install
npm run build     # 改完 index.html 后重新编译 CSS
npm run watch     # 或者边改边编译
npm run serve     # http://localhost:8080
```

⚠️ 新增 Tailwind 类之后**必须重跑 build**，否则新类不在 css 里。已经建好的 `assets/tailwind.css` 可以直接部署，CI 里加 `npm run build` 也可以。

## 部署到 Vercel

仓库根目录直接放这些文件即可（Framework Preset 选 **Other**，Build Command 留空或 `npm run build`，Output Directory 留空）。

如果仓库同时还有旧的 Next.js 项目，建议：
- Vercel → New Project → 同一仓库 → Root Directory 填本目录（如 `site`）
- Domains 里把 `www.holyshit.tv` 迁到新项目

## 内容结构

| 锚点 | 板块 | 作用 |
|---|---|---|
| — | Hero（全屏） | 左文右图，主视觉铺满，底部 scroll 提示 |
| `#usecases` | 应用场景 | 五类买家的五种用法（紧接 hero） |
| `#gallery` | 视觉展示 | 6 格品牌墙：品牌系统 + 5 张场景图 |
| `#value` | 价值分析 | 自建 vs 购买 的成本对比表 + 三条价值来源 |
| `#why` | 六条支撑 | 品牌同源 / 算法天花板 / 现成受众 / 格式变特许 / 平台独立 / 对标 campaign |
| `#becomes` | 三条路线 | 聚合 → 厂牌 → 媒体公司 |
| `#market` | 市场背景 | 4 个第三方数据 + 免责说明 |
| `#deal` | 交易 | 四种结构、公开锚点、六步流程 |
| `#materials` | 资料层级 | L1–L4 |
| `#contact` | 联系 | 邮箱 / 电话 / 网站 |

## 改文案

所有双语文本都在标签上：

```html
<h3 data-zh="厂牌层" data-en="Studio">Studio</h3>
```

默认英文，右下角「中文」按钮切换。加新文案时把两种语言都写进 `data-zh` / `data-en` 即可，JS 会自动接管。

## 设计规范（改动时保持一致）

| 项 | 值 |
|---|---|
| 背景 | `#000`（纯黑，主视觉也是纯黑底，避免色差） |
| 分割线 | `#1a1a20` |
| 强调色 | `#e22424`（只用于编号、eyebrow、关键数字后缀） |
| 标题 | `font-black tracking-tight`，32/44px 两档 |
| eyebrow | `font-mono text-[10px] tracking-[.28em] uppercase` |
| 区块间距 | `py-24 lg:py-32` |
| 卡片 | 1px 边框 + `gap-px` + 背景色做分割（不用阴影） |

## 已知取舍

- **$2,000,000 出现在交易区**，作为「公开锚点」；真实区间在 NDA 后给。这是刻意保留的：页面需要筛掉砍价的人，但不该在第一屏就把买家吓走。
- **市场数据只保留了第三方公开预测**，并加了免责句。没有放营收预测——那种数字会被尽调律师当场否掉。
- 页面里不再点名任何单一买家。
