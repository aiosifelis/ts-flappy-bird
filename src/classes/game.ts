import { IState } from 'typings/interfaces'
import Bird from './Bird'
import Pipe from './pipe'
import Score from './score'

interface IGame {
    ctx: CanvasRenderingContext2D
    state: IState
    background: string
    bird: Bird
    pipes: Pipe[]
    score: Score
    render: () => void
    update: () => void
}

class Game implements IGame {
    public state: IState
    public ctx: CanvasRenderingContext2D
    public background: string
    public bird: Bird
    public pipes: Pipe[]
    public score: Score
    constructor(ctx: CanvasRenderingContext2D, state: IState) {
        this.background = '#333333'
        this.ctx = ctx
        this.state = state
        this.bird = new Bird(this.ctx, this.state)
        this.pipes = []
        this.score = new Score(this.ctx, this.state)
    }

    public render(): void {
        this.ctx.fillStyle = this.background
        this.ctx.fillRect(0, 0, this.state.width, this.state.height)
        this.bird.render()
        this.renderPipes()
        this.score.render()
    }

    public update(): void {
        this.updateBird()
        this.updatePipes()
    }

    private updateBird() {
        this.bird.update()

        if (this.state.keyState[this.state.keys.SPACE]) {
            this.bird.jump()
        }
    }

    private updatePipes() {
        for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i]
            pipe.update()
            if (pipe.offScreen()) {
                this.score.update(0.5)
                this.pipes.splice(i, 1)
            }

            if (pipe.hits(this.bird)) {
                this.score.update(-0.5)
            }
        }
    }

    private renderPipes() {
        if (this.state.frameCount % 150 === 0) {
            const space = 150
            const yt = 0
            const ht = Math.floor(
                100 | (Math.random() * this.state.height - space)
            )
            const yb = ht + space
            const hb = this.state.height - yb
            this.pipes.push(new Pipe(this.ctx, this.state, yt, ht))
            this.pipes.push(new Pipe(this.ctx, this.state, yb, hb))
            console.log(this.pipes)
        }

        for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i]
            pipe.render()
        }
    }
}

export default Game
