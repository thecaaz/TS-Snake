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
  apple: Apple
  x: number
  y: number
  direction: Direction
  nextDirection: Direction
  vel: number
  tail: Point[]
  tailLength: number

  constructor() {
    this.ctx = get2dContext()

    this.fps = 5

    this.sizeX = 300
    this.sizeY = 150
    this.boxSize = 9

    this.apple = new Apple(this.sizeX, this.sizeX, this.boxSize)

    this.x = 140
    this.y = 70

    this.direction = Direction.Right
    this.nextDirection = this.direction

    this.vel = 10

    this.tail = []
    this.tailLength = 4
  }
}

export default new Settings()
