# docsify-simple-dark-mode

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-simple-dark-mode</code>
</p>

![badge](https://img.shields.io/github/license/pikapikapikaori/docsify-simple-dark-mode) ![badge](https://img.shields.io/github/last-commit/pikapikapikaori/docsify-simple-dark-mode)

[English](README.md) | 中文

这是一款为dcosify增加黑暗模式的插件。

## 解决的问题

本插件在页面右上角添加了一个一直存在的浮动图标，即使下滑页面时也会继续在同一位置继续存在。点击该插件可以在主题[vue.css](https://github.com/docsifyjs/docsify/blob/develop/src/themes/vue.styl)与[dark.css](https://github.com/docsifyjs/docsify/blob/develop/src/themes/dark.styl)之间切换。

## 使用方法

`index.html`中确保你有以下style sheets并添加插件：

```html
<!-- stylesheets -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/dark.css" disabled>

<!-- docsify-simple-dark-mode plugin -->
<script src="https://cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/src/switchLightDarkMode.js"></script>
```

添加以下设置：

```js
window.$docsify = {
    switchLightDarkMode: {
        useSwitchMode: true,
        top: 130,
        right: 26,
        svgColor: '#7d7b75',
    },
}
```

| 属性          | 类型    | 描述                                 |
| ------------- | ------- | ------------------------------------ |
| useSwitchMode | Boolean | 是否使用本插件                       |
| top           | Integer | 第一个图标与页面顶部的距离，单位：px |
| right         | Integer | 图标与页面右侧的距离，单位：px       |
| svgColor      | String  | 图标颜色                             |

## Demo

[Github Page](https://pikapikapikaori.github.io/docsify-simple-dark-mode/)

## Others

如果您有对本项目的优化，欢迎提交PR。

如果您喜欢本插件，可以给我点个star，谢谢！

我开发的一些其他工具可以参考[我的博客](https://pikapikapikaori.github.io/pikapikapi-blog/#/ITtech/)。
