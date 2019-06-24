import { IState } from 'typings/interfaces'

interface IScore {
    ctx: CanvasRenderingContext2D
    state: IState
    x: number
    y: number
    font: string
    render: () => void
    update: (score: number) => void
    reset: () => void
}

class Score implements IScore {
    public ctx: CanvasRenderingContext2D
    public state: IState
    public x: number
    public y: number
    public font: string
    constructor(ctx: CanvasRenderingContext2D, state: IState) {
        this.ctx = ctx
        this.state = state
        this.font = '16px Verdana'
        this.x = 20
        this.y = 20
    }

    public render() {
        const {
            score: { current, best }
        } = this.state
        this.ctx.fillStyle = '#ffffff'
        this.ctx.font = this.font
        this.ctx.fillText(`Score: ${current}`, this.x, this.y)
        this.ctx.fillText(`Best: ${best}`, this.x, this.y + 20)
        this.ctx.fill()
    }

    public update(score: number) {
        this.state.score.current += score
        if (this.state.score.current > this.state.score.best) {
            this.state.score.best = this.state.score.current
        }
    }

    public reset() {
        this.state.score.current = 0
    }
}

export default Score
