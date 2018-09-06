import format from "format-number";
import isNumber from "is-number";
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

export const formatPercent = format({
  suffix: "%",
  round: 2
});

export const formatDecimal = format({
  round: 6
});

export function decimalToPercent(decimal: number) {
  return formatPercent(decimal * 100);
}

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

export function validatePositiveInteger(num: string): boolean {
  return isNumber(num) && parseInt(num, 10) >= 0;
}

export function validatePositiveFloat(num: string): boolean {
  return isNumber(num) && parseFloat(num) >= 0;
}

export function truncateString(str: string, max = 20): string {
  return str.length < max ? str : `${str.substr(0, max)}...`;
}
