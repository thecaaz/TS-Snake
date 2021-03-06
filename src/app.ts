import { Direction } from './Classes/Enums'
import Apple from './Classes/Apple'
import Settings from './settings'
import Player from './Classes/Player'
import IDrawable from './Interfaces/IDrawable'
import IGameObject from './Interfaces/IGameObject'

const player = new Player()
let apple = new Apple(player)

const drawables: IDrawable[] = [player, apple]
const gameObjects: IGameObject[] = [player, apple]

setInterval(gameTick, 1000 / Settings.fps)

function gameTick() {
  player.direction = player.nextDirection

  drawBackground()

  gameObjects.forEach(x => x.tick())

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
