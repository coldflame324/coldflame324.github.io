# 篝火边，冷饮摊

寒火的个人博客，线上地址：<https://coldflame324.github.io/>

用 [Astro](https://astro.build) + [Fuwari](https://github.com/saicaca/fuwari) 主题搭建，托管在 GitHub Pages 上。推送到 `main` 分支后由 GitHub Actions 自动构建并部署，不需要服务器。

## 本地开发

需要 Node.js ≥ 20 和 pnpm ≥ 9。

```sh
pnpm install              # 安装依赖
pnpm dev                  # 本地预览，默认 http://localhost:4321
pnpm build                # 构建到 ./dist（含 Pagefind 站内搜索索引）
pnpm preview              # 预览构建结果
pnpm new-post 文章文件名   # 新建一篇文章
```

## 写新文章

文章放在 `src/content/posts/` 下，新建 `.md` 文件即可。开头必须有 frontmatter：

```yaml
---
title: 文章标题
published: 2026-09-30
description: 摘要，会显示在文章列表和搜索结果里
tags: [标签一, 标签二]
category: 分类
draft: false      # 改成 true 就不会被发布
---
```

正文用 Markdown 写。主题还支持提示块（`:::note`）、GitHub 仓库卡片（`::github{repo="owner/repo"}`）、数学公式和 Mermaid 等，详见 [Fuwari 文档](https://github.com/saicaca/fuwari)。

## 常改的几个文件

| 文件 | 作用 |
| --- | --- |
| `src/config.ts` | 站点标题、副标题、主题色、导航栏、个人信息、Giscus 评论 |
| `src/content/spec/about.md` | 「关于」页面的内容 |
| `src/data/friends.ts` | 友链列表 |
| `src/pages/guestbook.astro` | 留言板页面的文案 |
| `astro.config.mjs` | 站点域名等构建配置 |
| `tailwind.config.cjs` | 字体栈（西文 Roboto，中文回退到系统黑体） |
| `src/styles/main.css` | 全局样式与中文排版微调 |

## 评论与留言板（Giscus）

评论基于 GitHub Discussions，不需要服务器，一共两个入口：

- **文章评论**：每篇文章底部各有自己的评论区，按文章路径（`mapping: pathname`）对应一个 discussion；
- **留言板**：导航栏的「留言板」（`/guestbook/`），所有人的留言汇聚到固定标题的那一个 discussion，标题由 `giscusConfig.guestbook.term` 决定。

两处共用 `src/config.ts` 里同一份 `giscusConfig`，用的是仓库的 **Announcements（公告）** 分类，**已开启**。

选公告格式是因为这种分类只有仓库维护者能新建 discussion，访客只能评论和回复，别人没法在你仓库里手动开新帖刷屏。想单独关掉某一处：文章评论由 `giscusConfig.enable` 控制，留言板还要 `giscusConfig.guestbook.enable` 也为 `true`；关掉之后 `/guestbook/` 会显示一张「留言板还没开启」的占位卡片，不会报错。

以后换仓库或者换分类（比如想把站点公告和文章评论分开）时，需要：

1. 打开仓库 `Settings → General → Features`，勾选 **Discussions**；
2. 到 <https://github.com/apps/giscus> 给这个仓库安装 giscus App；
3. 打开 <https://giscus.app/zh-CN>，填入仓库名 `coldflame324/coldflame324.github.io`，按提示选择讨论分类，页面会给出 `category` 和 `categoryId`；
4. 把 `category`、`categoryId` 换成上一步拿到的值。`repoId` 已经填好了，不用动。

只想开其中一处也行：文章评论由 `giscusConfig.enable` 控制，留言板还需要 `giscusConfig.guestbook.enable` 也为 `true`。配置没填好之前，`/guestbook/` 显示一张「留言板还没开启」的占位卡片，不会报错。

## 部署

`.github/workflows/deploy.yml` 会在每次推送到 `main` 时构建并发布。

**仓库需要先做一次设置**：`Settings → Pages → Build and deployment → Source` 选择 **GitHub Actions**。如果这里还停留在「Deploy from a branch」，Actions 的部署步骤会失败。

改完之后到 `Actions` 页面手动跑一次 `Deploy to GitHub Pages`，或者随便提交点改动触发。

## 版权

主题 [Fuwari](https://github.com/saicaca/fuwari) 基于 MIT 协议，见 `LICENSE`。本站文章内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。
