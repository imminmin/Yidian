---
title: Vite 与 webpack 的比较
sidebarDepth: 2
---

当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。大型项目包含数千个模块的情况并不少见。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的**开发效率**和**幸福感**。

## webpack 原理图

![](https://cn.vitejs.dev/assets/bundler.37740380.png)

## Vite原理图

![](https://cn.vitejs.dev/assets/esm.3070012d.png)

## 开发阶段比较

通过原理图可以看出 `webpack dev server` 在启动时需要先`build`一遍，而这个过程需要消耗很多时间。而vite 不同的是 执行`vite serve` 时，内部直接启动了`web Server`, 并不会先编译所有的代码文件,请求哪个模块再对该模块进行实时编译。这种按需动态编译的方式，极大的缩减了编译时间，项目越复杂、模块越多，vite的优势越明显。


## 生产阶段比较

在构建这块，Vite 在开发服务器与产品最终构建结果没有 Webpack 一致性强。

主要原因是我们为了在生产环境获得最佳的加载性能和兼容性，还是需要将代码进行tree-shaking、懒加载和 chunk 分割（以获得更好的缓存），所以 Vite 还是基于 [Rollup](https://rollupjs.org/) 进行产品最终构建打包。



## 总结

在开发阶段vite的优势更为明显，而在生产构建阶段并没有特别突出的表现。




