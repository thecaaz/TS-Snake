import { Direction } from './Enums'
import Point from './Point'
import Settings from '../settings'
import IDrawable from '../Interfaces/IDrawable'
import IGameObject from '../Interfaces/IGameObject'

export default class Player extends Point implements IDrawable, IGameObject {
  vel: number
  tail: Point[]
  tailLength: number
  direction: Direction
  nextDirection: Direction

  constructor() {
    super(240, 240)

    this.direction = Direction.Right
    this.nextDirection = this.direction
    this.tail = []
    this.tailLength = 4
    this.vel = Settings.vel
  }

  tick() {
    this.tail.push(new Point(this.x, this.y))
    this.setDirection()
    this.boundsCheck()
    this.manageTail()
  }

  setDirection(): void {
    switch (this.direction) {
      case Direction.Up:
        this.y = this.y - Settings.vel
        break
      case Direction.Down:
        this.y = this.y + Settings.vel
        break
      case Direction.Left:
        this.x = this.x - Settings.vel
        break
      case Direction.Right:
        this.x = this.x + Settings.vel
        break
    }
  }

  boundsCheck() {
    if (this.x >= Settings.sizeX) this.x = 0

    if (this.x < 0) this.x = Settings.sizeX - this.vel

    if (this.y >= Settings.sizeY) this.y = 0

    if (this.y < 0) this.y = Settings.sizeY - this.vel
  }

  manageTail() {
    if (this.tail.find(p => p.x == this.x && p.y == this.y)) {
      this.tailLength = 4
    }

    while (this.tail.length > this.tailLength) {
      this.tail.shift()
    }
  }

  draw(): void {
    Settings.ctx.fillStyle = 'blue'
    Settings.ctx.fillRect(this.x, this.y, Settings.boxSize, Settings.boxSize)

    for (let i = 0; i < this.tail.length; i++) {
      Settings.ctx.fillStyle = 'blue'
      Settings.ctx.fillRect(
        this.tail[i].x,
        this.tail[i].y,
        Settings.boxSize,
        Settings.boxSize
      )
    }
  }
  
  eat() {
    this.tailLength++;
  }
}
