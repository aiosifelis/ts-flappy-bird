import { IState } from 'typings/interfaces'

interface IBird {
    ctx: CanvasRenderingContext2D
    state: IState
    r: number
    x: number
    y: number
    velocity: number
    gravity: number
    upForce: number
    render: () => void
    update: () => void
    jump: () => void
    onLoose: () => void
}

class Bird implements IBird {
    public ctx: CanvasRenderingContext2D
    public state: IState
    public r: number
    public x: number
    public y: number
    public velocity: number
    public gravity: number
    public upForce: number
    public onLoose: () => void
    constructor(
        ctx: CanvasRenderingContext2D,
        state: IState,
        onLoose: () => void
    ) {
        this.ctx = ctx
        this.state = state
        this.r = 15
        this.x = this.state.width / 4
        this.y = this.state.height / 2
        this.velocity = 0
        this.gravity = 0.6
        this.upForce = -5
        this.onLoose = onLoose
    }

    public render() {
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = '#ffffff'
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.restore()
    }

    public update() {
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y >= this.state.height - this.r) {
            this.y = this.state.height - this.r
            this.velocity = 0
            this.onLoose()
        }
    }

    public jump() {
        this.velocity = this.upForce
    }
}

export default Bird
