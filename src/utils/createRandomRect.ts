import { Rect } from "./Rect";
import { random } from "./random";
import { getRandomColor } from "./getRandomColor";

export const createRandomRect = (
  ctx: CanvasRenderingContext2D,
  transparent = false
): void => {
  const rX = random(30, ctx.canvas.width - 30);
  const rY = random(30, ctx.canvas.height - 30);
  const rWidth = random(8, 40);
  const rHeigth = random(8, 40);
  const rColor = getRandomColor(transparent);

  const rect: Rect = new Rect(ctx, rX, rY, rWidth, rHeigth, rColor);
  rect.create();

  const rTime = random(0, 100);

  setInterval(() => {
    const rXStep = random(-20, 20);
    const rYStep = random(-20, 20);
    rect.change(rect.x + rXStep, rect.y + rYStep);
  }, rTime);
};
