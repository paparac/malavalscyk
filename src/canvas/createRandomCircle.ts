import { Circle } from "./Circle";
import { random } from "./random";

export const createRandomCircle = (ctx: CanvasRenderingContext2D): void => {
  const colors: Array<string> = [
    "#c27171",
    "#88c271",
    "#7184c2",
    "#9b71c2",
    "#c29c71",
    "#71c2b5",
    "#c271a7",
  ];
  const rX = random(30, ctx.canvas.width - 30);
  const rY = random(30, ctx.canvas.height - 30);
  const rRad = random(8, 20);
  const rColor = colors[random(0, 7)];

  const circle: Circle = new Circle(ctx, rX, rY, rRad, rColor);
  circle.create();

  const rTime = random(0, 100);

  setInterval(() => {
    const rXStep = random(-20, 20);
    const rYStep = random(-20, 20);
    circle.change(circle.x + rXStep, circle.y + rYStep);
  }, rTime);
};
