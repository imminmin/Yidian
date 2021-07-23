const katex = require('markdown-it-katex')
const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => ['mi', 'msup', 'mo', 'mrow', 'annotation', 'semantics', 'math', 'msub'].includes(tag)
        }
      }
    }
  },
  lang: "zh-CN",
  title: "一点",
  description: "一点前端技术",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  base: '/Yidian/',
  plugins: pluginConf,

  themeConfig: {
    // repo: 'https://github.com/imminmin/Yidian',
    logo: "/images/logo.png",
    lastUpdated: '上次更新',
    contributorsText: '贡献者',
    navbar: navConf,
    sidebar: sidebarConf,
  },
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  extendsMarkdown(md) {
    md.use(katex)
  }
};
