import { Circle } from "./Circle";
import { random } from "./random";
import { getRandomColor } from "./getRandomColor";

export const createRandomCircle = (
  ctx: CanvasRenderingContext2D,
  transparent = false,
  randomColor = false,
  randomRadius = false,
): void => {
  const rX = random(30, ctx.canvas.width - 30);
  const rY = random(30, ctx.canvas.height - 30);
  const rRad = random(8, 20);
  const rColor = getRandomColor(transparent);

  const circle: Circle = new Circle(ctx, rX, rY, rRad, rColor);
  circle.create();

  const rTime = random(0, 100);

  setInterval(() => {
    const rXStep = random(-20, 20);
    const rYStep = random(-20, 20);
    const rRad = randomRadius ? random(8, 20) : undefined;
    const rColor = randomColor ? getRandomColor(transparent) : undefined;
    circle.change(circle.x + rXStep, circle.y + rYStep, rRad, rColor);
  }, rTime);
};
