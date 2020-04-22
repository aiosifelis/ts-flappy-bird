import { IState } from "typings/interfaces";

export default (ctx: CanvasRenderingContext2D, state: IState): void => {
    state.width = document.documentElement.clientWidth;
    state.height = document.documentElement.clientHeight;

    state.width = window.innerWidth;
    state.height = window.innerHeight;

    ctx.canvas.width = state.width;
    ctx.canvas.height = state.height;
};
