/**
 * 检测正文里到底有没有数学公式（`$...$` 或 `$$...$$`）。
 *
 * 为什么不用正则判断：`$` 的语义由 remark-math 决定，它的规则比「两个 $ 之间
 * 夹一段字」细得多，自己写正则一定会跟它跑偏。比如
 *
 *     这本书一共 $100 到 $200 之间。
 *
 * remark-math 会把 `$100 到 $` 当成行内公式渲染出来。正则会漏判，于是页面上
 * 出现 KaTeX 的标记却没有加载 KaTeX 的样式表 —— 比不做按需加载还糟。
 *
 * 所以这里不去猜，直接复用 remark-math 已经解析好的语法树：树上出现
 * `math` / `inlineMath` 节点就说明有公式，判定结果和真正渲染出来的东西一致。
 *
 * 和 remark-reading-time.mjs 一样，结果写进 frontmatter，
 * 页面里通过 `remarkPluginFrontmatter.hasMath` 读取。
 */
export function remarkHasMath() {
	return (tree, { data }) => {
		let found = false;
		const walk = (node) => {
			if (found || !node) return;
			if (node.type === "math" || node.type === "inlineMath") {
				found = true;
				return;
			}
			if (Array.isArray(node.children)) {
				for (const child of node.children) walk(child);
			}
		};
		walk(tree);
		data.astro.frontmatter.hasMath = found;
	};
}
