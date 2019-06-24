const fallback = (callback) => {
    window.setTimeout(callback, 1000 / 60)
}

export default () => {
    window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        fallback
}
