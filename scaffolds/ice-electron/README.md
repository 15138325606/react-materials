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

## 打包网络问题

由于网络原因，各种包下载不下来，导致出错

electron-builder 在打包时会检测cache中是否有electron 包，如果没有的话会从github上拉去，在国内网络环境中拉取的过程大概率会失败，所以你可以自己去下载一个包放到cache目录里

例如在mac环境打包electron应用，执行 yarn dist-mac

```

  clipboard git:(master) ✗ yarn dist-mac

> clipboard@1.0.0 dist /Users/xx/workspace/electron/clipboard
> electron-builder --mac --x64

  • electron-builder  version=22.3.2 os=18.7.0
  • loaded configuration  file=package.json ("build" field)
  • writing effective config  file=dist/builder-effective-config.yaml
  • packaging       platform=darwin arch=x64 electron=8.0.0 appOutDir=dist/mac
  • downloading     url=https://github.com/electron/electron/releases/download/v8.0.0/electron-v8.0.0-darwin-x64.zip size=66 MB parts=8
```

可以单独下载这个包 https://github.com/electron/electron/releases/download/v8.0.0/electron-v8.0.0-darwin-x64.zip，更推荐使用淘宝地址下载速度会更快，放到~/Library/Caches/electron/ 目录下

使用淘宝下载地址

```python
https://npm.taobao.org/mirrors/electron/
```

各个平台的目录地址

```
Linux: $XDG_CACHE_HOME or ~/.cache/electron/
MacOS: ~/Library/Caches/electron/
Windows: %LOCALAPPDATA%/electron/Cache or ~/AppData/Local/electron/Cache/
```

我的windows目录是在

```shell
C:\Users\XXX\AppData\Local\electron\Cache
```

同理，把单独下载的nsis和nsis-resources的资源包 放到~/Library/Caches/electron-builder/Cache/nsis 目录下，把单独下载的winCodeSign资源包放到~/Library/Caches/electron-builder/Cache/winCodeSignnsis 目录下。

使用淘宝下载地址

```
https://npm.taobao.org/mirrors/electron-builder-binaries/
```
