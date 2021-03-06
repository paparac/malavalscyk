import { Rect } from "./Rect";
import { random } from "./random";
import { getRandomColor } from "./getRandomColor";

export const createRandomLine = (
  ctx: CanvasRenderingContext2D,
  { transparent = false, randomColor = false, randomSize = false }
): void => {
  const rX = random(30, ctx.canvas.width - 30);
  const rY = random(30, ctx.canvas.height - 30);
  const rWidth = random(1, 5);
  const rHeigth = random(10, 150);
  const rColor = getRandomColor(transparent);

  const rect: Rect = new Rect(ctx, rX, rY, rWidth, rHeigth, rColor);
  rect.create();

  const rTime = random(0, 100);

  setInterval(() => {
    const rXStep = random(-20, 20);
    const rYStep = random(-20, 20);
    const rWidth = randomSize ? random(1, 5) : undefined;
    const rHeigth = randomSize ? random(10, 150) : undefined;
    const rColor = randomColor ? getRandomColor(transparent) : undefined;
    rect.change(rect.x + rXStep, rect.y + rYStep, rWidth, rHeigth, rColor);
  }, rTime);
};
