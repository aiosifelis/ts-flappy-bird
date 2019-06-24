import { IState } from 'typings/interfaces'

export default (state: IState): void => {
    document.body.addEventListener('keydown', (e: KeyboardEvent) => {
        state.keyState[e.keyCode] = true
    })

    document.body.addEventListener('keyup', (e: KeyboardEvent) => {
        delete state.keyState[e.keyCode]
    })

    document.body.addEventListener('mousedown', () => {
        state.mouseDown = true
    })

    document.body.addEventListener('touchstart', () => {
        state.mouseDown = true
    })

    document.body.addEventListener('mouseup', () => {
        state.mouseDown = false
    })

    document.body.addEventListener('touchend', () => {
        state.mouseDown = false
    })

    document.body.addEventListener('mousemove', (e: MouseEvent) => {
        state.mouseX = e.clientX
        state.mouseY = e.clientY
    })
}
