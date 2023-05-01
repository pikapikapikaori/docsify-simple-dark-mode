/*
 * @Author: pikapikapikaori pikapikapi_kaori@icloud.com
 * @Date: 2023-04-30 12:57:52
 * @LastEditors: pikapikapikaori pikapikapi_kaori@icloud.com
 * @LastEditTime: 2023-05-01 14:52:43
 * @FilePath: /pikapikapi-blog/docs/utils/countWords.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//default values
var switchLightDarkModeOptions = {
    useSwitchMode: true,
}

// Docsify plugin functions
function plugin(hook, vm) {
    if (!switchLightDarkModeOptions.useSwitchMode) {
        return
    }

    let currentThemeMode = true

    hook.mounted(function () {
        let lightTheme = Docsify.dom.findAll('[href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css"]')[0]
        let darkTheme = Docsify.dom.findAll('[href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/dark.css"]')[0]

        var switchSpan = document.createElement('span')

        switchSpan.id = 'switchLightDarkModeDivBeforeArticle'
        switchSpan.style.position = 'fixed'
        switchSpan.style.right = '30px'
        switchSpan.style.top = '130px'

        const lightModeIconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16"> <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/> </svg>'
        const darkModeIconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightbulb-off-fill" viewBox="0 0 16 16"> <path d="M2 6c0-.572.08-1.125.23-1.65l8.558 8.559A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.303 4.181L3.818 1.697a6 6 0 0 1 8.484 8.484zM5 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5zM2.354 1.646a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-12-12z"/> </svg>'
        
        switchSpan.innerHTML = lightModeIconHtml
        switchSpan.onclick = function (e) {
            currentThemeMode = !currentThemeMode
            switchSpan.innerHTML = currentThemeMode ? lightModeIconHtml : darkModeIconHtml
            lightTheme.disabled = !currentThemeMode
            darkTheme.disabled = currentThemeMode
        }

        document.body.appendChild (switchSpan)
    })
}

// Docsify plugin options
window.$docsify["switchLightDarkMode"] = Object.assign(
    switchLightDarkModeOptions,
    window.$docsify["switchLightDarkMode"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)