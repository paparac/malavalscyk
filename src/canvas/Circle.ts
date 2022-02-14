export class Circle {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  radius: number;
  bgColor: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    x = 0,
    y = 0,
    radius = 10,
    bgColor = "#c27171"
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.bgColor = bgColor;
  }

  create(): Circle {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fill();
    this.ctx.closePath();
    return this;
  }

  change(
    x = this.x,
    y = this.y,
    radius = this.radius,
    bgColor = this.bgColor
  ): Circle {
    this.x = x > this.ctx.canvas.width ? 0 : x < 0 ? this.ctx.canvas.width : x;
    this.y =
      y > this.ctx.canvas.height ? 0 : y < 0 ? this.ctx.canvas.height : y;
    this.radius = radius;
    this.bgColor = bgColor;
    this.create();
    return this;
  }
}
