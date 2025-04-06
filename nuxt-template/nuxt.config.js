module.exports = {
  // 全局页面头部配置
  head: {
    title: 'Cool UI Nuxt 模板',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '基于Nuxt.js的Cool UI项目模板' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 全局CSS
  css: [
    '@/assets/css/main.css'
  ],

  // 页面切换时的加载进度条
  loading: { color: '#38a169' },

  // 自动导入组件
  components: true,

  // 模块
  modules: [
    // 添加需要的模块
  ],

  // 构建配置
  build: {
    // 配置webpack
  },

  // 服务器配置
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
