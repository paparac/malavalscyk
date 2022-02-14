import { createRandomCircle } from "@/canvas/createRandomCircle";
import { random } from "./random";

export const createSeveralRandomCircles = (
  ctx: CanvasRenderingContext2D
): void => {
  let count = random(0, 3);

  while (count > 0) {
    count--;
    createRandomCircle(ctx);
  }
};
