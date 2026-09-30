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
export const friends: Friend[] = [];
