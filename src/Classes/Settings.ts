export default class Settings {
  ctx: CanvasRenderingContext2D
  fps: number
  sizeX: number
  sizeY: number
  boxSize: number
  vel: number
  tailLength: number

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    this.fps = 5
    this.sizeX = 100
    this.sizeY = 100
    this.boxSize = 10
    this.vel = 1
    this.tailLength = 4
  }
}
