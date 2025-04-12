# Cool UI Nuxt.js 模板

这是一个基于Nuxt.js的项目模板，用于快速启动新项目。

## 特性

- Vue.js 框架
- 基于Nuxt.js的服务端渲染
- 自动路由配置
- 代码分割
- 服务器端渲染（SSR）
- 静态站点生成
- 强大的模块化系统

## 关于构建工具

Nuxt.js使用自己的构建系统，不需要额外配置Vite。Nuxt.js已经提供了优化的开发体验。

如果需要使用Vite，可以考虑升级到Nuxt 3，它原生支持Vite作为构建工具。

## 快速开始

```bash
# 安装依赖
npm install

# 开发环境启动 hot-reload
npm run dev

# 生产环境构建并启动服务
npm run build
npm run start

# 生成静态项目
npm run generate
```

## 项目结构

```
.
├── assets/         # 静态资源文件
│   └── css/        # CSS文件
├── components/     # 可复用组件
├── layouts/        # 布局组件
│   └── default.vue # 默认布局
├── pages/          # 页面组件
│   └── index.vue   # 首页
├── plugins/        # 插件
├── static/         # 静态文件
└── store/          # Vuex 状态管理
```
