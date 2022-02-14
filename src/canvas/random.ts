export const random = (min = -10, max = 10): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
