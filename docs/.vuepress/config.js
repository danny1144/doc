module.exports = {
    title: '其实，我是一名程序员',
    //base: '/vueblog/',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpeg' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: false
    },
    themeConfig: {
        logo:"/img/logo.jpeg",
        nav: [
          { text: '首页', link: '/timeLine/' },
          { text: '技术', link:'/technology/'},
          { text: '生活',link: '/life/' },
          { text: '思考',link: '/ponder/'},
          { text: '标签库', link: '/tags/' },
          { text: '关于', link:'/about/'},
          { text: '留言板', link:'/massage/'},
          { text: '链接',
            items: [
                {text:'简书',link: 'https://www.jianshu.com/u/a053df515092' },
                {text:'GitHub',link: 'https://github.com/danny1144' },
                {text:'码云',link: 'https://gitee.com/zxp110' },
            ]
          }
        ],
        lastUpdated: 'Last Updated', 
      }
  }