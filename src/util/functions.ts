import format from "format-number";
import * as R from "rambda";
import IDictionary from "../common/models/IDictionary";

export function randomColor(): string {
  return `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7);
}

export const formatCurrency = format({
  prefix: "$",
  padRight: 2,
  round: 2
});

export const formatShares = format({
  round: 0
});

export function arrayToIDictionary<T>(
  arr: T[],
  getKey: (x: T) => string
): IDictionary<T> {
  return R.reduce<T, IDictionary<T>>(
    (acc, elem) => {
      const key = getKey(elem);
      acc[key] = elem;
      return acc;
    },
    {},
    arr
  );
}
