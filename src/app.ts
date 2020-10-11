import { get2dContext } from './setup'
import { Direction } from './Classes/Enums'
import Point from './Classes/Point'
import Apple from './Classes/Apple'
import Settings from './settings'

setInterval(gameTick, 1000 / Settings.fps)

function gameTick() {
  Settings.direction = Settings.nextDirection

  Settings.ctx.fillStyle = 'black'
  Settings.ctx.fillRect(0, 0, Settings.sizeX, Settings.sizeY)

  Settings.tail.push(new Point(Settings.x, Settings.y))

  setDirectionToPlayer()

  boundsCheck()

  movePlayer()

  manageTail()

  checkAppleCollision()

  drawApple()
}

document.onkeydown = function (key) {
  switch (key.code) {
    case 'ArrowUp':
      if (Settings.direction != Direction.Down)
        Settings.nextDirection = Direction.Up
      break
    case 'ArrowLeft':
      if (Settings.direction != Direction.Right)
        Settings.nextDirection = Direction.Left
      break
    case 'ArrowRight':
      if (Settings.direction != Direction.Left)
        Settings.nextDirection = Direction.Right
      break
    case 'ArrowDown':
      if (Settings.direction != Direction.Up)
        Settings.nextDirection = Direction.Down
      break
  }
}

function manageTail() {
  if (Settings.tail.find(p => p.x == Settings.x && p.y == Settings.y)) {
    Settings.tailLength = 4
  }

  while (Settings.tail.length > Settings.tailLength) {
    Settings.tail.shift()
  }

  for (let i = 0; i < Settings.tail.length; i++) {
    Settings.ctx.fillStyle = 'blue'
    Settings.ctx.fillRect(
      Settings.tail[i].x,
      Settings.tail[i].y,
      Settings.boxSize * 2,
      Settings.boxSize
    )
  }
}

function checkAppleCollision() {
  if (Settings.x == Settings.apple.x && Settings.y == Settings.apple.y) {
    Settings.apple = new Apple(Settings.sizeX, Settings.sizeY, Settings.boxSize)
    Settings.tailLength++
  }
}

function drawApple() {
  Settings.ctx.fillStyle = 'red'
  Settings.ctx.fillRect(
    Settings.apple.x,
    Settings.apple.y,
    Settings.boxSize * 2,
    Settings.boxSize
  )
}

function setDirectionToPlayer() {
  switch (Settings.direction) {
    case Direction.Up:
      Settings.y = Settings.y - Settings.vel
      break
    case Direction.Down:
      Settings.y = Settings.y + Settings.vel
      break
    case Direction.Left:
      Settings.x = Settings.x - Settings.vel * 2
      break
    case Direction.Right:
      Settings.x = Settings.x + Settings.vel * 2
      break
  }
}

function movePlayer() {
  Settings.ctx.fillStyle = 'blue'
  Settings.ctx.fillRect(
    Settings.x,
    Settings.y,
    Settings.boxSize * 2,
    Settings.boxSize
  )
}

function boundsCheck() {
  if (Settings.x >= Settings.sizeX) {
    Settings.x = 0
  }
  if (Settings.x < 0) {
    Settings.x = Settings.sizeX - Settings.boxSize * 2
  }

  if (Settings.y >= Settings.sizeY) {
    Settings.y = 0
  }
  if (Settings.y < 0) {
    Settings.y = Settings.sizeY - Settings.boxSize
  }
}
