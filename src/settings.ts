import Apple from './Classes/Apple'
import { Direction } from './Classes/Enums'
import Point from './Classes/Point'
import { get2dContext } from './setup'

class Settings {
  ctx: CanvasRenderingContext2D
  fps: number
  sizeX: number
  sizeY: number
  boxSize: number
  vel: number
  tail: Point[]
  tailLength: number

  constructor() {
    this.ctx = get2dContext()

    this.fps = 5

    this.sizeX = 500
    this.sizeY = 500
    this.boxSize = 18

    this.vel = 20

    this.tail = []
    this.tailLength = 4
  }
}

export default new Settings()
