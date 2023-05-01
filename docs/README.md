# docsify-simple-dark-mode

<p align="center">
  <img src="https://docsify.js.org/_media/icon.svg" />
  <br />
  <code>docsify-simple-dark-mode</code>
</p>

![badge](https://img.shields.io/github/license/pikapikapikaori/docsify-simple-dark-mode) ![badge](https://img.shields.io/github/last-commit/pikapikapikaori/docsify-simple-dark-mode)

English | [中文](/zh-cn/)

This is a plugin to add dark mode for docsify.

## After Using This Plugin

This plugin adds a fixed floating icon to the top-right corner of the whole page, which will be appearing all the time, even when you scroll your screen down. Clicking on this icon will change the theme of your site between [vue.css](https://github.com/docsifyjs/docsify/blob/develop/src/themes/vue.styl) and [dark.css](https://github.com/docsifyjs/docsify/blob/develop/src/themes/dark.styl).

## To Use

In `index.html`, ensure you have following style sheets, and install this plugin:

```html
<!-- stylesheets -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/dark.css" disabled>

<!-- docsify-simple-dark-mode plugin -->
<script src="https://cdn.jsdelivr.net/gh/pikapikapikaori/docsify-simple-dark-mode@latest/src/switchLightDarkMode.js"></script>
```

Add settings:

```js
window.$docsify = {
    switchLightDarkMode: {
        useSwitchMode: true,
    },
}
```

| Attribute     | Type    | Description                |
| ------------- | ------- | -------------------------- |
| useSwitchMode | Boolean | Whether to use this plugin |

## Others

It's welcomed to make pr to this repo in order to improve this plugin.

If you like this plugin, please give a star, thanks!

For more tools I developed please refer to [my blog](https://pikapikapikaori.github.io/pikapikapi-blog/#/en-us/ITtech/).
