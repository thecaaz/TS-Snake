import { Direction } from './Enums'
import Point from './Point'
import Settings from '../settings'
import IDrawable from '../Interfaces/IDrawable'

export default class Player extends Point implements IDrawable {
  vel: Number
  tail: Point[]
  tailLength: Number
  direction: Direction
  nextDirection: Direction

  constructor() {
    super(140, 70)

    this.direction = Direction.Right
    this.nextDirection = this.direction
    this.tail = []
    this.tailLength = 4
    this.vel = Settings.vel
  }

  tick() {
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
        this.x = this.x - Settings.vel * 2
        break
      case Direction.Right:
        this.x = this.x + Settings.vel * 2
        break
    }
  }

  boundsCheck() {
    if (this.x >= Settings.sizeX) {
      this.x = 0
    }
    if (this.x < 0) {
      this.x = Settings.sizeX - Settings.boxSize * 2
    }

    if (this.y >= Settings.sizeY) {
      this.y = 0
    }
    if (this.y < 0) {
      this.y = Settings.sizeY - Settings.boxSize
    }
  }

  manageTail() {
    if (this.tail.find(p => p.x == this.x && p.y == this.y)) {
      this.tailLength = 4
    }

    while (this.tail.length > this.tailLength) {
      this.tail.shift()
    }

    for (let i = 0; i < this.tail.length; i++) {
      Settings.ctx.fillStyle = 'blue'
      Settings.ctx.fillRect(
        this.tail[i].x,
        this.tail[i].y,
        Settings.boxSize * 2,
        Settings.boxSize
      )
    }
  }

  draw(): void {
    Settings.ctx.fillStyle = 'blue'
    Settings.ctx.fillRect(
      this.x,
      this.y,
      Settings.boxSize * 2,
      Settings.boxSize
    )
  }
}
