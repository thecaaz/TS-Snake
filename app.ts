import { get2dContext } from './setup'
import { Apple, Direction, Point } from './definitions'

const ctx = get2dContext()

const fps = 5

setInterval(tick, 1000 / fps)

const sizeX = 300
const sizeY = 150
const boxSize = 9

let apple = new Apple(sizeX, sizeY, boxSize)

let x = 140
let y = 70

let direction = Direction.Right

let vel = 10

let tail: Point[] = []
let tailLength = 4

function tick() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, sizeX, sizeY)

  tail.push(new Point(x, y))

  switch (direction) {
    case Direction.Up:
      y = y - vel
      break
    case Direction.Down:
      y = y + vel
      break
    case Direction.Left:
      x = x - vel * 2
      break
    case Direction.Right:
      x = x + vel * 2
      break
  }

  if (x >= sizeX) {
    x = 0
  }
  if (x < 0) {
    x = sizeX - boxSize * 2
  }

  if (y >= sizeY) {
    y = 0
  }
  if (y < 0) {
    y = sizeY - boxSize
  }

  ctx.fillStyle = 'blue'
  ctx.fillRect(x, y, boxSize * 2, boxSize)

  if (tail.find((p) => p.x == x && p.y == y)) {
    tailLength = 4
  }

  while (tail.length > tailLength) {
    tail.shift()
  }

  for (let i = 0; i < tail.length; i++) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(tail[i].x, tail[i].y, boxSize * 2, boxSize)
  }

  if (x == apple.x && y == apple.y) {
    apple = new Apple(sizeX, sizeY, boxSize)
    tailLength++
  }

  ctx.fillStyle = 'red'
  ctx.fillRect(apple.x, apple.y, boxSize * 2, boxSize)
}

document.onkeydown = function (key) {
  switch (key.code) {
    case 'ArrowUp':
      if (direction != Direction.Down) direction = Direction.Up
      break
    case 'ArrowLeft':
      if (direction != Direction.Right) direction = Direction.Left
      break
    case 'ArrowRight':
      if (direction != Direction.Left) direction = Direction.Right
      break
    case 'ArrowDown':
      if (direction != Direction.Up) direction = Direction.Down
      break
  }
}
