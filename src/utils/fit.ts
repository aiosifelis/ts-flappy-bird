import { IState } from 'typings/interfaces'

export default (ctx: CanvasRenderingContext2D, state: IState): void => {
    state.width = document.documentElement.clientWidth
    state.height = document.documentElement.clientHeight

    ctx.canvas.width = state.width
    ctx.canvas.height = state.height
}
