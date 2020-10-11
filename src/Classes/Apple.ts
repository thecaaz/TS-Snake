import Point from './Point'
import Settings from '../settings'
import IDrawable from '../Interfaces/IDrawable'
import Player from './Player'
import IGameObject from '../Interfaces/IGameObject'

export default class Apple extends Point implements IDrawable, IGameObject {
  player: Player

  constructor(player: Player) {
    let x = Settings.sizeX * Math.random()
    x = Math.round(x / 10) * 10
    if (x % 20 != 0) {
      x = x - 10
    }

    let y = Settings.sizeY * Math.random()
    y = Math.round(y / 10) * 10
    super(x, y)
    this.player = player
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

  tick() {
    if (this.player.x == this.x && this.player.y == this.y) {
      this.move()
      this.player.tailLength = this.player.tailLength + 1
    }
  }
}
