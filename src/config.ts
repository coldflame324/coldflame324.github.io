import type {
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "篝火边，冷饮摊",
	subtitle: "寒火的个人博客",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 265, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon/campfire-32.png", // Path of the favicon, relative to the /public directory
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
		{
			src: "/favicon/campfire-180.png",
			sizes: "180x180",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "友链",
			url: "/friends/", // Internal links should not include the base path, as it is automatically added
		},
		LinkPreset.About,
		{
			name: "Bilibili",
			url: "https://space.bilibili.com/11726828",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "寒火",
	bio: "在篝火边支了个冷饮摊，随便写点东西。",
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/11726828",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/coldflame324",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

/**
 * Giscus 评论（基于 GitHub Discussions，无需服务器）。
 *
 * 启用前必须完成以下步骤，否则评论区会显示报错：
 *   1. 在仓库 Settings → General → Features 中勾选 Discussions；
 *   2. 在 https://github.com/apps/giscus 为 coldflame324/coldflame324.github.io 安装 giscus App；
 *   3. 打开 https://giscus.app/zh-CN ，填入仓库名后按页面提示拿到 category 与 categoryId；
 *   4. 把下面 4 个占位值替换成真实值，并将 enable 改为 true。
 *
 * repoId 已填好，无需修改。
 */
export const giscusConfig: GiscusConfig = {
	enable: false, // TODO: 配置好下面几项后改成 true
	repo: "coldflame324/coldflame324.github.io",
	repoId: "R_kgDOU0-fNg",
	category: "Announcements", // TODO: 替换成你在 giscus.app 选择的讨论分类名
	categoryId: "", // TODO: 替换成 giscus.app 给出的 categoryId（形如 DIC_kwDO...）
	mapping: "pathname", // 每篇文章按其路径对应一个 discussion
	strict: false,
	reactionsEnabled: true,
	emitMetadata: false,
	inputPosition: "top",
	lang: "zh-CN",
	loading: "lazy",
};
