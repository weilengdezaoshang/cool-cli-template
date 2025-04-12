# Cool UI Next.js 模板

这是一个基于Next.js的项目模板，用于快速启动新项目。

## 特性

- React 18
- Next.js 14
- 文件系统路由
- 静态生成和服务器端渲染
- API路由
- 内置CSS模块支持
- ESLint 代码检查

## 关于构建工具

Next.js使用自己的构建系统，基于Webpack和SWC优化，不需要额外配置Vite。Next.js已经提供了高性能的开发体验，包括快速的热模块替换(HMR)。

## 快速开始

```bash
# 安装依赖
npm install

# 开发环境启动
npm run dev

# 生产环境构建
npm run build

# 生产环境启动
npm start
```

## 项目结构

```
.
├── components/   # 复用组件
├── pages/        # 页面组件和API路由
│   ├── api/      # API路由
│   ├── _app.js   # 应用入口
│   └── index.js  # 首页
├── public/       # 静态资源
├── styles/       # 样式文件
└── lib/          # 工具函数
```
