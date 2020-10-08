function setup() {
  let canvas = getCanvas()
  let ctx = getContext(canvas)

  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 500, 500)
  ctx.fill()

  function getCanvas(): HTMLCanvasElement {
    let canvasElement: HTMLElement | null = document.getElementById('canvas')
    if (canvasElement === null) throw 'Unable to get canvas element'
    return canvasElement as HTMLCanvasElement
  }
  function getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    let ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
    if (ctx === null) throw 'Unable to get context'
    return ctx
  }
}

setup()
