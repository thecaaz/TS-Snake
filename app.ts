import { get2dContext } from './setup'

class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

const ctx = get2dContext()

setInterval(tick, 15 / 1000)

const sizeX = 300
const sizeY = 150
const boxSize = 10

let x = 0
let y = 0

let xv = 1
let yv = 1

let tail: Point[] = []
let tailLength = 20

function tick() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, sizeX, sizeY)

  ctx.fillStyle = 'red'
  ctx.fillRect(x, y, 10, 10)

  if (x + boxSize + xv > sizeX || x + xv < 0) xv = -xv
  if (y + boxSize + yv > sizeY || y + yv < 0) yv = -yv

  tail.push(new Point(x, y))

  while (tail.length > tailLength) {
    tail.shift()
  }

  for (let i = 0; i < tail.length; i++) {
    ctx.fillStyle = 'red'
    ctx.fillRect(tail[i].x, tail[i].y, 10, 10)
  }

  x = x + xv
  y = y + yv
}
