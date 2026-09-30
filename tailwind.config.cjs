/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        // 西文用 Roboto；中文依次回退到各平台自带的黑体，
        // 这样不额外加载中文字体文件（动辄十几 MB），也能保证排版正常。
        sans: [
          "Roboto",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Noto Sans CJK SC",
          "Source Han Sans SC",
          "WenQuanYi Micro Hei",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
