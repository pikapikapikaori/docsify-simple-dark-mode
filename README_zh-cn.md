# docsify-simple-dark-mode

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-simple-dark-mode</code>
</p>

![badge](https://img.shields.io/github/license/pikapikapikaori/docsify-simple-dark-mode) ![badge](https://img.shields.io/github/last-commit/pikapikapikaori/docsify-simple-dark-mode)

[English](README.md) | 中文

这是一款为 docsify 增加小组件的插件，主要功能包括：

- 黑暗模式切换，支持自动模式
- 主题切换，提供了一些内置主题，也支持自定义主题
- 主题色切换
- 上述三个小组件的隐藏、显示切换
- 进度条
- 回顶部

## 使用方法

`index.html` 中，在以下代码后：

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@5/dist/themes/core.min.css"/>
```

插入以下代码：

```html
<link id="theme-vue" rel="stylesheet" href="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/vue.min.css">
<link id="theme-dark" rel="stylesheet" href="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/dark.min.css" disabled>
<link id="theme-color" rel="stylesheet" href="" disabled>
```

同时在以下代码后：

```html
<script src="//cdn.jsdelivr.net/npm/docsify@5/dist/docsify.min.js"></script>
```

插入以下代码：

```html
<!-- docsify-simple-dark-mode plugin -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/addWidgets.min.css"/>
<script src="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/js/addWidgets.min.js"></script>
```

添加以下设置：

```js
window.$docsify = {
    addWidgets: {
        useSwitchMode: true,
        top: 20,
        right: 26,
        topOffset: 500,
        themes: [
            {
            name: 'default',
            light: null,
            dark: null,
            lightColor: '#ffffff',
            darkColor: '#3f3f3f',
            lightThemeColor: '#42b883', 
            darkThemeColor: '#f66'
            },
            {
            name: 'lavender',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/lavender.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/lavandula.min.css',
            lightColor: '#f5f0fa',
            darkColor: '#1f1830',
            lightThemeColor: '#cca2ec',
            darkThemeColor: '#cca2ec'
            },
            {
            name: 'kraft',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/kraft.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/bronze.min.css',
            lightColor: '#f4ecd8',
            darkColor: '#2a1f14',
            lightThemeColor: '#ecc7a2',
            darkThemeColor: '#ecc7a2'
            },
            {
            name: 'matcha',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/matcha.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/library.min.css',
            lightColor: '#e3efd1',
            darkColor: '#1e3328',
            lightThemeColor: '#c3eca2',
            darkThemeColor: '#c3eca2'
            },
            {
            name: 'kirby',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/kirby.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/metaknight.min.css',
            lightColor: '#ffeef4',
            darkColor: '#1a2238',
            lightThemeColor: '#eca2b8',
            darkThemeColor: '#7a424e'
            },
            {
            name: 'catppuccin',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/latte.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/catppuccin.min.css',
            lightColor: '#eff1f5',
            darkColor: '#1e1e2e',
            lightThemeColor: '#c3a2ec',
            darkThemeColor: '#c3a2ec'
            },
            {
            name: 'gold',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/whitegold.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/darkgold.min.css',
            lightColor: '#f5f0e8',
            darkColor: '#0a0a0a',
            lightThemeColor: '#ecdaa2',
            darkThemeColor: '#ecdaa2'
            },
            {
            name: 'calligraphy',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/calligraphy.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/grid.min.css',
            lightColor: '#fbfbf5',
            darkColor: '#1a2028',
            lightThemeColor: '#ecc7a2',
            darkThemeColor: '#a2c7ec'
            },
            {
            name: 'typography',
            light: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/typography.min.css',
            dark: '//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/dot.min.css',
            lightColor: '#fafaf5',
            darkColor: '#1e2128',
            lightThemeColor: '#a2c7ec',
            darkThemeColor: '#a2c7ec'
            }
        ]
    },
}
```

| 属性            | 类型      | 描述                                                 |
| --------------- | --------- | ---------------------------------------------------- |
| `useSwitchMode` | `Boolean` | 是否使用本插件。                                     |
| `top`           | `Integer` | 全部图标相对于页面纵向中间向下偏移的量，单位：`px`。 |
| `topOffset`     | `Integer` | 页面向下滑动多少距离后，回顶部图标出现，单位：`px`。 |
| `themes`        | `Object`  | 需要添加的主题。                                     |

针对 `themes` 属性，具体说明如下：

| 属性              | 描述                                                                                                                                                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`            | 主题名称，无实际用处，仅作为标识。但是 calligraphy 和 typography 这两个主题除外，其背景有格点，因此插件里做了特殊判断，以渲然选择主题时显示的图标。 |
| `light`           | 明亮模式使用的主题 URL，也可以使用自定义地主题，此时 URL 为相对于 `index.html` 的路径。                                                             |
| `dark`            | 黑暗模式使用的主题 URL，也可以使用自定义地主题，此时 URL 为相对于 `index.html` 的路径。                                                             |
| `lightColor`      | 明亮模式使用的主题背景颜色，用于渲染选择主题时显示的图标。                                                                                          |
| `darkColor`       | 黑暗模式使用的主题背景颜色，用于渲染选择主题时显示的图标。                                                                                          |
| `lightThemeColor` | 明亮模式使用的主题色，用于渲染选择主题时显示的图标。                                                                                                |
| `darkThemeColor`  | 黑暗模式使用的主题色，用于渲染选择主题时显示的图标。                                                                                                |

## Others

如果您有对本项目的优化，欢迎提交 PR。

如果您喜欢本插件，可以给我点个 star，谢谢！

我的主页可以访问[这里](http://www.pikapikapi.com)，欢迎交流。
