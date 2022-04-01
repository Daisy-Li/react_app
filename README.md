# 项目名称

- **技术支持**：该项目基于 `react`，由`xxx`创建于 `2021`年 `7`月 `25`日。
- **前后端分离情况**：

  - 前后端分离开发；
  - 静态资源由`前端`上线；
  - 域名由`后端`控制跳转，`前端`提供`local`域名。

- **项目说明**：

### 目录

<!-- TOC -->

- [项目名称](#项目名称)
  - [目录](#目录)
  - [1.项目特性](#1项目特性)
  - [2.项目功能](#2项目功能)
  - [3.相关链接](#3相关链接)
  - [4.相关页面](#4相关页面)
  - [5.相关指令](#5相关指令)
  - [6.本地开发](#6本地开发)
  - [7.跨域问题](#7跨域问题)
  - [8.编译打包（上预发、上线流程）](#8编译打包上预发上线流程)
    - [上线](#上线)
    - [上预发](#上预发)
  - [9.相关文档](#9相关文档)
    - [1.prd 文档](#prd文档)
    - [2.后端接口文档](#2后端接口文档)
    - [3.设计稿](#3设计稿)
    - [4.其他文档](#4其他文档)
  - [10.目录结构](#10目录结构)
  - [11.上线日志](#11上线日志)
  - [12.注意事项](#12注意事项)
  - [13.其他说明](#13其他说明)
    - [1.commit message 规范](#commit-message-规范)
    - [2.代码规范与格式化](#代码规范与格式化)

<!-- /TOC -->

### 1.项目特性

- React 17+
- React-Hooks

### 2.项目功能

- 

### 3.相关链接

- local 域名：xx
- 预发域名：[https://xx.com]
- 线上域名：[访问页面](https://github.com/Daisy-Li/react_app)
- 代码库地址：[访问代码库](https://github.com/Daisy-Li/react_app)

### 4.相关页面

- 多页面时设置

### 5.相关指令

```sh
$ yarn                       # 安装依赖
$ yarn start:http            # 运行项目（本地开发 http）
$ yarn start:https           # 运行项目（本地开发 https）
$ yarn build:prod            # 生产环境打包
$ yarn build:yufa            # 预发环境打包
```

### 6.本地开发

1. `yarn`(安装 package.json 下项目依赖)；
2. `yarn start`(安装成功后启动项目)；
3. 项目在本地`localhost:3000`端口运行。

### 7.跨域问题

- 配置 host

### 8.编译打包（上预发、上线流程）

**注意：提交代码时请使用 commitzen，否则 commit message 不符合规范无法提交，具体参考：https://juejin.im/post/5bd2debfe51d457abc710b57**

#### 上线

1. 从 dev 新建分支开发，master 作为上线分支；
2. 上线前：切换到本地 dev 分支，合并开发分支代码后构建生产包；
3. `yarn build`打包代码。使用`yarn check`校验生产包是否包含预发接口（beta-api）等；
4. 执行`yarn release`发布生产包至远端 master 分支；

#### 上预发

1. 在开发分支上执行`yarn deploy-yufa`打包代码；

### 9.相关文档

#### 1.prd文档

- 

#### 2.后端接口文档

- 

#### 3.设计稿

- 

### 项目配置过程记录

#### 1.项目初始化化

``` bash
yarn create react-app my-app --template typescript

// 另一种方式是覆盖  react-app-rewired
yarn eject 
```

#### 2.安装依赖

特殊的依赖需要手动安装

特别注意下 node-sass有可能安装失败，可以多次尝试。

```
"@types/axios": "^0.14.0",
"@types/classnames": "^2.2.11",
"@types/date-fns": "^2.6.0",
"@types/js-cookie": "^2.2.6",
"@types/lodash": "^4.14.165",
"@types/query-string": "^6.3.0",
"@types/react-lazy-load-image-component": "^1.5.1",
"@types/react-router-dom": "^5.1.6",
"@types/react-transition-group": "^4.4.0",
"@types/styled-components": "^5.1.4",
"@types/swiper": "^5.4.1",

"axios": "^0.21.0",
"chalk": "^4.1.0",
"classnames": "^2.2.6",
"date-fns": "^2.16.1",
"eslint-config-prettier": "^6.15.0",
"eslint-import-resolver-typescript": "^2.3.0",
"eslint-plugin-prettier": "^3.1.4",
"fetch-jsonp": "^1.1.3",
"glob": "^7.1.6",
"js-cookie": "^2.2.1",
"lodash": "^4.17.20",
"lottie-react-web": "^2.2.2",
"node-sass": "4",
"node-xlsx": "^0.15.0",
"query-string": "^6.13.7",
"react-lazy-load-image-component": "^1.5.1",
"react-router-cache-route": "^1.10.1",
"react-router-dom": "^5.2.0",
"react-transition-group": "^4.4.1",
"styled-components": "^5.2.1",
"swiper": "^6.4.5",
"vconsole": "^3.3.4",
```

#### 3.webpack.config.js
1. post rootValue
```
// 此处设计稿是二倍图
require("postcss-pxtorem")({
  rootValue: 200,
  propWhiteList: [],
}),
```
2. 设置别名

config/paths.js
```
appComponent: resolveApp('src/components'),
appLayout: resolveApp('src/layout'),
```

webpack.config.js
```
"@": paths.appSrc,
"@components": paths.appComponent,
"@layout": paths.appLayout,
```
tsconfig.json
```
"paths": {
  "@/*": ["src/*"],
  "@components/*": ["src/components/*"],
  "@layout/*": ["src/layout/*"]
}
```
3. 配置预发打包文件不带hash
新增全局变量 `REACT_APP_NO_HASH`

#### 4.配置eslint和prettier

```
yarn add  prettier eslint-plugin-prettier
```

初始化eslint
```
./node_modules/.bin/eslint --init
```
项目会自动生成.eslintrc.js，打开.eslintrc.js文件，在扩展中增加"plugin:prettier/recommended" ：

```
extends: [
  "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
  "plugin:react-hooks/recommended", // Uses the recommended rules from @eslint-plugin-react-hooks
  "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
],
```

#### 5.规范 git commit

使用到的工具是 commitizen，cz-conventional-changelog，husky。
其中，前两个库为必要的，第三个为可选库

* Commitizen是一个撰写合格 Commit message 的工具。
* cz-conventional-changelog 是 angular 的 commit message 格式，也是目前使用最广泛的格式。
* husky 是一个 Git Hook 工具。

1. 安装工具

```
"commitizen": "^4.1.2",
"cz-conventional-changelog": "^3.2.0",
"husky": "^4.2.5",
"prettier": "^2.0.5",
"pretty-quick": "^3.0.0",
```

2. 在 package.json中配置

```
"scripts": {
    "commit": "git-cz"
},
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
},
"husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --branch=master"
    }
},
```

3. 使用
* git commit 仍然是普通的 git 提交模式。
* yarn commit 会执行交互式 commit 提交，在终端跟着提示一步步输入即可。

4. 代码格式化
如果需要每次提交代码进行代码格式化，可以使用 husky，prettier等，这个钩子由 git commit 调用，pre-commit 如字面意思是预先提交，在提交前执行，这样在提交前就会对暂存代码进行格式化。

#### 6.之前项目相关的运行命令
``` json
"scripts": {
  "start:http": "dotenv -e .env.dev node scripts/start.js",
  "start:https": "dotenv -e .env.dev cross-env HTTPS=true node scripts/start.js",
  "build": "dotenv -e .env.prod node scripts/build.js",
  "build:prod": " dotenv -e .env.prod  node scripts/build.js",
  "build:yufa": " dotenv -e .env.yufa  node scripts/build.js",
  "commit": "git add . && git cz && git push",
  "check": "node scripts/check.js",
  "release:prod": "rm -rf node_modules/.cache && node scripts/check.js && node scripts/gh-pages.js",
  "release:yufa": "rm -rf node_modules/.cache && node scripts/gh-pages-yufa.js",
  "deploy-yufa": "yarn build:yufa && yarn release:yufa",
  "analyze": "yarn build && source-map-explorer 'build/static/js/*.js'",
  "generate": "node scripts/generateLogDataFile.js"
},
```
#### 7.src目录结构
```
├── build                         # 打包后生成的文件
├── node_modules                   # 安装的依赖
├── public                         # 静态资源文件夹
└── src
    ├── assets                     # 项目依赖的一些静态资源
    ├── components                 # 公共组件
    ├── api                    # 接口请求
    ├── utils                      # 工具方法
    ├── pages                      # 页面视图组件
    ├── styles                     # 公共样式 reset
├── .env.prod                      # 环境变量，在生产环境被载入
├── .env.dev                       # 环境变量，在开发环境被载入
├── .env.yufa                      # 环境变量，在预发环境被载入
├── .eslintrc.js                   # 代码检查配置文件
├── .gitignore                     # git忽略文件
├── .huskyrc                       # 阻止错误的 git 提交
├── package.json                   # npm包描述文件
├── yarn.lock                      # 记录当前状态下实际安装的各个npm package的具体来源和版本号
├── README.md                      # 项目说明
├── config-overrides.js            # react-app配置文件
```
