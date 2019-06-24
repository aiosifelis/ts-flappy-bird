import { IState } from 'typings/interfaces'
import Bird from './Bird'

interface IPipe {
    ctx: CanvasRenderingContext2D
    state: IState
    x: number
    y: number
    w: number
    h: number
    velocity: number
    color: string
    render: () => void
    update: () => void
    offScreen: () => boolean
    hits: (bird: Bird) => boolean
}

class Pipe implements IPipe {
    public ctx: CanvasRenderingContext2D
    public state: IState
    public x: number
    public y: number
    public w: number
    public h: number
    public velocity: number
    public color: string
    constructor(
        ctx: CanvasRenderingContext2D,
        state: IState,
        y: number,
        h: number
    ) {
        this.ctx = ctx
        this.state = state
        this.w = 100
        this.x = this.state.width + this.w
        this.y = y

        this.h = h
        this.velocity = 2
        this.color = '#ffffff'
    }

    public render() {
        this.ctx.lineWidth = 2
        this.ctx.fillStyle = this.color
        this.ctx.rect(this.x, this.y, this.w, this.h)
        this.ctx.fill()
    }

    public update(): void {
        this.x -= this.velocity
    }

    public offScreen(): boolean {
        return this.x + this.w < 0
    }

    public hits(bird: Bird): boolean {
        const bd = bird.x
        const hits: boolean =
            (bd > this.x && bd < this.x + this.w) ||
            (bd > this.y && bd < this.y + this.h)
        if (hits) {
            this.color = '#ff0000'
        }

        return hits
    }
}

export default Pipe
