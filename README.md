# docsify-simple-dark-mode

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-simple-dark-mode</code>
</p>

![badge](https://img.shields.io/github/license/pikapikapikaori/docsify-simple-dark-mode) ![badge](https://img.shields.io/github/last-commit/pikapikapikaori/docsify-simple-dark-mode)

English | [中文](README_zh-cn.md)

This is a plugin that adds widgets to docsify. Its main features include:

- Dark mode switching, with auto mode support
- Theme switching, with some built-in themes and support for custom themes
- Theme color switching
- Show / hide toggles for the above three widgets
- Progress bar
- Back to top

## Usage

In `index.html`, after the following code:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@5/dist/themes/core.min.css"/>
```

Insert the following code:

```html
<link id="theme-vue" rel="stylesheet" href="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/vue.min.css">
<link id="theme-dark" rel="stylesheet" href="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/theme/dark.min.css" disabled>
<link id="theme-color" rel="stylesheet" href="" disabled>
```

Also, after the following code:

```html
<script src="//cdn.jsdelivr.net/npm/docsify@5/dist/docsify.min.js"></script>
```

Insert the following code:

```html
<!-- docsify-simple-dark-mode plugin -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/css/addWidgets.min.css"/>
<script src="//cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/dist/js/addWidgets.min.js"></script>
```

Add the following settings:

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

| Property        | Type      | Description                                                                           |
| --------------- | --------- | ------------------------------------------------------------------------------------- |
| `useSwitchMode` | `Boolean` | Whether to use this plugin                                                            |
| `top`           | `Integer` | The downward offset of all icons relative to the vertical middle of the page, in `px` |
| `topOffset`     | `Integer` | How far the page scrolls down before the back-to-top icon appears, in `px`            |
| `themes`        | `Object`  | Themes to add.                                                                        |

For the `themes` property, the details are as follows:

| Property          | Description                                                                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`            | Theme name. It has no practical use and only serves as an identifier. However, the `calligraphy` and `typography` themes are exceptions. Their backgrounds contain grid / dot patterns, so the plugin applies special handling to render the icon shown when selecting a theme. |
| `light`           | Theme URL used in light mode. A custom theme can also be used; in this case, the URL is a path relative to `index.html`.                                                                                                                                                        |
| `dark`            | Theme URL used in dark mode. A custom theme can also be used; in this case, the URL is a path relative to `index.html`.                                                                                                                                                         |
| `lightColor`      | Theme background color used in light mode, used to render the icon shown when selecting a theme.                                                                                                                                                                                |
| `darkColor`       | Theme background color used in dark mode, used to render the icon shown when selecting a theme.                                                                                                                                                                                 |
| `lightThemeColor` | Theme color used in light mode, used to render the icon shown when selecting a theme.                                                                                                                                                                                           |
| `darkThemeColor`  | Theme color used in dark mode, used to render the icon shown when selecting a theme.                                                                                                                                                                                            |

## Others

If you have improvements for this project, PRs are welcome.

If you like this plugin, you can give me a star. Thank you!

You can visit my homepage [here](http://www.pikapikapi.com/#/en-us/). Feel free to reach out.
