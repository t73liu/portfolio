import format from "format-number";

export function randomColor(): string {
  return `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7);
}

export const formatCurrency = format({
  prefix: "$",
  padRight: 2,
  round: 2
});
