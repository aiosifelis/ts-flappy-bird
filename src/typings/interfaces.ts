import Game from 'classes/game'

export interface IState {
    width: number
    height: number
    keyState: {
        [key: number]: boolean
    }
    keys: {
        LEFT: number
        UP: number
        RIGHT: number
        DOWN: number
        SPACE: number
    }
    mouseDown: boolean
    mouseX: number
    mouseY: number
    score: {
        current: number
        best: number
    }
    game: Game
    frameCount: number
}
