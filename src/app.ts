import { get2dContext } from './setup'
import { Direction } from './Classes/Enums'
import Point from './Classes/Point'
import Apple from './Classes/Apple'
import Settings from './settings'
import Player from './Classes/Player'
import IDrawable from './Interfaces/IDrawable'

const player = new Player()
let apple = new Apple()

const drawables: IDrawable[] = [player, apple]

setInterval(gameTick, 1000 / Settings.fps)

function gameTick() {
  player.direction = player.nextDirection

  drawBackground()

  player.tail.push(new Point(player.x, player.y))

  player.tick()

  checkAppleCollision()

  drawables.forEach(x => x.draw())
}

document.onkeydown = function (key) {
  switch (key.code) {
    case 'ArrowUp':
      if (player.direction != Direction.Down)
        player.nextDirection = Direction.Up
      break
    case 'ArrowLeft':
      if (player.direction != Direction.Right)
        player.nextDirection = Direction.Left
      break
    case 'ArrowRight':
      if (player.direction != Direction.Left)
        player.nextDirection = Direction.Right
      break
    case 'ArrowDown':
      if (player.direction != Direction.Up)
        player.nextDirection = Direction.Down
      break
  }
}

function drawBackground() {
  Settings.ctx.fillStyle = 'black'
  Settings.ctx.fillRect(0, 0, Settings.sizeX, Settings.sizeY)
}

function checkAppleCollision() {
  if (player.x == apple.x && player.y == apple.y) {
    apple.move()
    Settings.tailLength++
  }
}
