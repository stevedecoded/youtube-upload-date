let style = document.createElement("style")
style.setAttribute("type", "text/css")
style.innerHTML =
"#top-level-buttons-computed > *, \
#top-level-buttons-computed a \
{ padding: 0 !important; margin: 0 !important; } \
"
document.getElementsByTagName("head")[0].appendChild(style)

setInterval(() => {
    let outer = document.getElementById('menu-container')
    if (!outer) {
        return false
    }

    let container = outer.querySelector('.top-level-buttons')
    if (!container || !container.childNodes.length) {
        return false
    }

    let nodes = container.childNodes

    for (let i = 0; i < nodes.length; i ++) {
        if (parseInt(i) != 0) {
            let text = container.childNodes[i].querySelector('yt-formatted-string')
            if (text) {
                text.innerText = ''
            }
        }
    }
}, 2000)
