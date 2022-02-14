import { random } from "./random";

const colors: Array<string> = [
  "#c27171",
  "#88c271",
  "#7184c2",
  "#9b71c2",
  "#c29c71",
  "#71c2b5",
  "#c271a7",
  "#c2b371",
];

export const getRandomColor = (transparent = false): string => {
  const color = colors[random(0, colors.length)];

  if (transparent) {
    const transparent = random(10, 99);
    return `${color}${transparent}`;
  }

  return color;
};
