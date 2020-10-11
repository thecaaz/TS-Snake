export class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

export enum Direction {
  Up,
  Down,
  Left,
  Right
}

export class Apple extends Point {
  constructor(sizeX: number, sizeY: number, boxSize: number) {
    sizeX = sizeX * Math.random()
    sizeX = Math.round(sizeX / 10) * 10
    if (sizeX % 20 != 0) {
      sizeX = sizeX - 10
    }

    sizeY = sizeY * Math.random()
    sizeY = Math.round(sizeY / 10) * 10

    console.log('x: ' + sizeX)
    console.log('y: ' + sizeY)
    console.log('--------------')

    let x = sizeX
    let y = sizeY
    super(x, y)
  }
}
