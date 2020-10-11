import Point from './Point'
import Settings from '../settings'
import IDrawable from '../Interfaces/IDrawable'

export default class Apple extends Point implements IDrawable {
  constructor() {
    let x = Settings.sizeX * Math.random()
    x = Math.round(x / 10) * 10
    if (x % 20 != 0) {
      x = x - 10
    }

    let y = Settings.sizeY * Math.random()
    y = Math.round(y / 10) * 10
    super(x, y)
  }

  move() {
    let x = Settings.sizeX * Math.random()
    x = Math.round(x / 10) * 10
    if (x % 20 != 0) {
      x = x - 10
    }

    let y = Settings.sizeY * Math.random()
    y = Math.round(y / 10) * 10

    this.x = x
    this.y = y
  }

  draw(): void {
    Settings.ctx.fillStyle = 'red'
    Settings.ctx.fillRect(
      this.x,
      this.y,
      Settings.boxSize * 2,
      Settings.boxSize
    )
  }
}
