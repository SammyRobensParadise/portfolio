export default class WaterTexture {
  size: number

  points: Array<{ x: number; y: number; age: number }>

  radius: number

  width: number

  maxAge: number

  height: number

  canvas: HTMLCanvasElement | null

  ctx: CanvasRenderingContext2D | null

  constructor(options: { debug: boolean; canvas: HTMLCanvasElement }) {
    this.size = 64
    this.points = []
    this.radius = this.size * 0.1
    this.width = this.size
    this.height = this.size
    this.maxAge = 64
    this.canvas = null
    this.ctx = null
    if (options.debug) {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.radius = this.width * 0.1
    }

    this.initTexture(options.canvas)
  }

  // Initialize our canvas
  initTexture(canvas: HTMLCanvasElement): void {
    if (canvas) {
      this.canvas = canvas
      this.canvas.id = 'WaterTexture'
      this.canvas.width = this.width
      this.canvas.height = this.height
      this.ctx = this.canvas.getContext('2d')
      this.clear()
    }
  }

  clear(): void {
    if (this.ctx) {
      this.ctx.fillStyle = 'black'
    }
    if (this.ctx && this.canvas) {
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  addPoint(point: { x: number; y: number }): void {
    this.points.push({ x: point.x, y: point.y, age: 0 })
  }

  update(): void {
    this.clear()
    this.points.forEach((point, i) => {
      point.age += 1
      if (point.age > this.maxAge) {
        this.points.splice(i, 1)
      }
    })
    this.points.forEach((point) => {
      this.drawPoint(point)
    })
  }

  drawPoint(point: { x: number; y: number; age: number }): void {
    // Convert normalized position into canvas coordinates
    const pos = {
      x: point.x * this.width,
      y: point.y * this.height
    }
    const { radius } = this
    const { ctx } = this

    let intensity = 1
    intensity = 1 - point.age / this.maxAge

    const color = '255,255,255'

    const offset = this.width * 5
    // 1. Give the shadow a high offset.
    if (ctx && this.ctx) {
      ctx.shadowOffsetX = offset
      ctx.shadowOffsetY = offset
      ctx.shadowBlur = radius * 1
      ctx.shadowColor = `rgba(${color},${0.2 * intensity})`

      this.ctx.beginPath()
      this.ctx.fillStyle = 'rgba(255,0,0,1)'
      // 2. Move the circle to the other direction of the offset
      this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }
}
