module.exports = {
  base: '/LibComponent/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  lang: 'zh-CN',
  outDir: '../dist',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Group 1',   // 必要的
          collapsible: true,
          items: [
            { text: '表格', link: '/components/Table' }
          ]
        },
      ]
    },
    lastUpdated: 'Last Updated'
  }
}