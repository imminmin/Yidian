const utils = require('./utils');
module.exports = {
  lang: "zh-CN",
  title: "一点",
  description: "一点前端技术",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  base: '/yidian/',
  themeConfig: {
    // repo: 'https://github.com/imminmin/Yidian',
    logo: "/images/logo.png",
    lastUpdated: '上次更新',
    navbar: utils.getNavigationMenu("./docs"),
    sidebar: utils.getSidebars("./docs"),
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: 'vue',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'aaa',
    //         link: '/vue/aaa.md',
    //       },

    //       {
    //         text: 'vue3+vite',
    //         link: '/vue/vue3+vite.md',
    //       },
    //     ],
    //   },
    //   {
    //     text: 'react',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'react',
    //         link: '/react/README.md',
    //       },
    //     ],
    //   },
    // ]
  },
  plugins: [

  ],
};
