import Point from './Point'

export default class Apple extends Point {
    constructor(sizeX: number, sizeY: number, boxSize: number) {
      sizeX = sizeX * Math.random()
      sizeX = Math.round(sizeX / 10) * 10
      if (sizeX % 20 != 0) {
        sizeX = sizeX - 10
      }
  
      sizeY = sizeY * Math.random()
      sizeY = Math.round(sizeY / 10) * 10
  
      let x = sizeX
      let y = sizeY
      super(x, y)
    }
  }