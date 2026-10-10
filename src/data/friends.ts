export type Friend = {
	/** 站点名称 */
	name: string;
	/** 站点地址 */
	url: string;
	/** 头像图片地址，可以是外链 */
	avatar?: string;
	/** 一句话简介 */
	description?: string;
	/** 可选标签，用于展示分类或小徽章 */
	tags?: string[];
};

/**
 * 友链列表。
 *
 * 想加谁，就往下面的数组里追加一个对象即可，例如：
 *
 *   {
 *     name: "某某的博客",
 *     url: "https://example.com",
 *     avatar: "https://example.com/avatar.png",
 *     description: "一个有趣的人。",
 *     tags: ["技术"],
 *   },
 *
 * 保存后重新构建（或本地 `pnpm dev`）就能看到。
 */
export const friends: Friend[] = [
	{
		name: "ff66ccff",
		url: "https://ff66ccff.github.io/",
		avatar: "https://github.com/ff66ccff.png",
		description: "算法竞赛与 Vibe Coding 笔记。",
		tags: ["技术", "算法"],
	},
	{
		name: "Valproate",
		url: "https://lingyu061126.github.io/",
		avatar: "https://github.com/LingYu061126.png",
		description: "电气本科生的学习笔记与碎碎念。",
		tags: ["学习笔记"],
	},
	{
		name: "Astepluver",
		url: "https://astepluver.github.io/",
		avatar: "https://astepluver.github.io/images/avatar.webp",
		description: "基础医学（病原生物学）：细菌耐药研究与文献笔记。",
		tags: ["医学", "文献笔记"],
	},
];
