export function get2dContext(): CanvasRenderingContext2D {
  let canvas = getCanvas()
  let ctx = getContext(canvas)
  return ctx
}

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
