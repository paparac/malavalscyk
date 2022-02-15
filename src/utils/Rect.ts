export class Rect {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  heigth: number;
  bgColor: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    x = 0,
    y = 0,
    width = 8,
    heigth = 8,
    bgColor = "#c27171"
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.bgColor = bgColor;
  }

  create(): Rect {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.heigth);
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fill();
    this.ctx.closePath();
    return this;
  }

  change(
    x = 0,
    y = 0,
    width = this.width,
    height = this.heigth,
    bgColor = this.bgColor
  ): Rect {
    this.x = x > this.ctx.canvas.width ? 0 : x < 0 ? this.ctx.canvas.width : x;
    this.y =
      y > this.ctx.canvas.height ? 0 : y < 0 ? this.ctx.canvas.height : y;
    this.width = width;
    this.heigth = height;
    this.bgColor = bgColor;
    this.create();
    return this;
  }
}
