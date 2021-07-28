---
title: Vite
---

## 介绍
> 面向现代浏览器的一个更轻、更快的Web应用开发工具，基于ECMAScript 标准原生模块系统（ES Modules）实现。相对于 [Vue CLI](https://cli.vuejs.org/zh/) 、[webpack](https://webpack.docschina.org/)更快。

## 特点

1. 轻量


2. 按需打包

Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。


3. HMR (热渲染依赖）

在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。

Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

* ## 参考资料

+ [Vite](https://cn.vitejs.dev/)
