import Point from './Point'
import Settings from '../settings'
import IDrawable from '../Interfaces/IDrawable'
import Player from './Player'
import IGameObject from '../Interfaces/IGameObject'

export default class Apple extends Point implements IDrawable, IGameObject {
  player: Player

  constructor(player: Player) {
    let x = Settings.sizeX * Math.random()
    x = Math.round(x / Settings.vel) * Settings.vel

    let y = Settings.sizeY * Math.random()
    y = Math.round(y / Settings.vel) * Settings.vel
    super(x, y)
    this.player = player
  }

  move() {
    let x = Settings.sizeX * Math.random()
    x = Math.round(x / Settings.vel) * Settings.vel

    let y = Settings.sizeY * Math.random()
    y = Math.round(y / Settings.vel) * Settings.vel

    this.x = x
    this.y = y
  }

  draw(): void {
    Settings.ctx.fillStyle = 'red'
    Settings.ctx.fillRect(this.x, this.y, Settings.boxSize, Settings.boxSize)
  }

  tick() {
    if (this.player.x == this.x && this.player.y == this.y) {
      this.move()
      this.player.eat()
    }
  }
}
