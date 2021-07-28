module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    children: [
      { text: "Vue", link: "/frontend/vue/" },
      { text: "Vite", link: "/frontend/vite/" },
      { text: "Node", link: "/frontend/node/" },
    ],
  },
  {
    text: "项目",
    children: [
      { text: "日报项目", link: "/project/daily/" }
    ],
  },
  {
    text: "规范",
    // link: "/rule/",
    children: [
      { text: "技术博文分享规范事项", link: "/rule/技术博文分享规范事项.md" },
    ],
  },
  {
    text: "更多",
    children: [
      { text: "Github", link: "https://github.com/shanyuhai123/documents" },
    ],
  },
];
