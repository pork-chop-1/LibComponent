module.exports = {
  base: '/LibComponent/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/' },
    ],
    sidebar: {
      '/components/': [
        {
          title: 'Group 1',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            ['Table', '表格']
          ]
        },
      ]
    },
    lastUpdated: 'Last Updated'
  }
}