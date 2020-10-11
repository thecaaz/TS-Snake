import { get2dContext } from './setup'
import { Direction } from './Classes/Enums'
import Point from './Classes/Point'
import Apple from './Classes/Apple'
import Settings from './settings'
import Player from './Classes/Player'

const player = new Player()
let apple = new Apple(Settings.sizeX, Settings.sizeY, Settings.boxSize)
setInterval(gameTick, 1000 / Settings.fps)

function gameTick() {
  player.direction = player.nextDirection

  Settings.ctx.fillStyle = 'black'
  Settings.ctx.fillRect(0, 0, Settings.sizeX, Settings.sizeY)

  player.tail.push(new Point(player.x, player.y))

  player.setDirection()

  player.boundsCheck()

  player.move()

  player.manageTail()

  checkAppleCollision()

  drawApple()
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

function checkAppleCollision() {
  if (player.x == apple.x && player.y == apple.y) {
    apple = new Apple(Settings.sizeX, Settings.sizeY, Settings.boxSize)
    Settings.tailLength++
  }
}

function drawApple() {
  Settings.ctx.fillStyle = 'red'
  Settings.ctx.fillRect(
    apple.x,
    apple.y,
    Settings.boxSize * 2,
    Settings.boxSize
  )
}
