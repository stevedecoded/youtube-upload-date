let style = document.createElement("style")
style.setAttribute("type", "text/css")
style.innerHTML =
"#top-level-buttons-computed > *, \
#top-level-buttons-computed a, \
ytd-menu-renderer.ytd-video-primary-info-renderer > yt-icon-button \
{ padding: 0 !important; margin: 0 !important; } \
"
document.getElementsByTagName("head")[0].appendChild(style)

function getButtonNodes() {
    let outer = document.getElementById('menu-container')
    if (!outer) {
        return null
    }

    let container = outer.querySelector('.top-level-buttons')
    if (!container || !container.childNodes.length) {
        return null
    }

    return container.childNodes
}

function stopDislikePing() {
    clearInterval(dislikePing)
    dislikePing = null
}

function setDisplayStyle(el, state) {
    if (el.style.display != state) {
        el.style.display = state
    }
}

let mainPing = setInterval(() => {
    let nodes = getButtonNodes()

    if (!nodes) {
        return false
    }

    for (let i = 2; i < nodes.length; i ++) {
        let text = nodes[i].querySelector('yt-formatted-string')
        if (text) {
            setDisplayStyle(text, 'none')
        }
    }
}, 200)

let dislikePing = setInterval(() => {
    let nodes = getButtonNodes()

    if (!nodes) {
        return false
    }

    let text = nodes[1].querySelector('yt-formatted-string')
    if (text) {
        if (isNaN(parseInt(text.innerText))) {
            setDisplayStyle(text, 'none')
        } else {
            text.style.display = 'block'
            let tooltip = document.querySelector('.ryd-tooltip')
            if (tooltip) {
                tooltip.style.width = (nodes[0].clientWidth
                    + nodes[1].clientWidth
                    + 8) + 'px'
            }
            stopDislikePing()
        }
    }
}, 200)

setTimeout(() => {
    clearInterval(mainPing)
    mainPing = null
    stopDislikePing()
}, 30000)
