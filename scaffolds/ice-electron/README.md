## Simple

> A TypeScript simple template

## 使用

```bash
# 安装依赖
$ npm install

# 启动服务
$ npm start  # visit http://localhost:3333

# 启动electron
npm run electron-start
```

[More docs](https://ice.work/docs/guide/about).

## 目录

```md
├── build/                         # 构建产物
├── mock/                          # 本地模拟数据
│   ├── index.[j,t]s
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
│   ├── components/                # 自定义业务组件
│   │   └── Guide/
│   │       ├── index.[j,t]sx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── index.tsx/
│   ├── global.scss                # 全局样式
│   └── app.[j,t]s[x]              # 应用入口脚本
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .gitignore
└── [j,t]sconfig.json
```

## 打包

打包react代码

```
yarn build
```

打包electron安装包

```
<!--mac环境-->
yarn dist-mac

<!--windows环境-->
yarn dist-win64
```
