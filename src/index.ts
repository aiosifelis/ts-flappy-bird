import { IState } from 'typings/interfaces'
import { fit, input, requestAnimFrame } from 'utils'
import Game from 'classes/game'

const ctx: CanvasRenderingContext2D = document
    .querySelector('canvas')
    .getContext('2d')

const state: IState = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    keyState: {},
    keys: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SPACE: 32
    },
    mouseDown: false,
    mouseX: 0,
    mouseY: 0,
    score: {
        current: 0,
        best: 0
    },
    game: null,
    frameCount: 0
}

const frame = () => {
    window.requestAnimationFrame(frame)
    fit(ctx, state)

    ctx.clearRect(0, 0, state.width, state.height)

    state.game.render()
    state.game.update()
    state.frameCount++
}

const init = () => {
    requestAnimFrame()
    state.game = new Game(ctx, state)
    input(state)
    fit(ctx, state)
    frame()
}

window.onload = init
