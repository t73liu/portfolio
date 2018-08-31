import { Epic } from "redux-observable";
import { interval } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { IRootAction, IRootState } from "../../store";
import { getSymbolNames, isError } from "../../util/ajax";
import ISymbolName from "../models/ISymbolName";
import * as symbolActions from "./actions";

export const dailyRequestSymbolNameEpic: Epic<
  IRootAction,
  IRootAction,
  IRootState
> = () => {
  return interval(5000).pipe(
    map(() => {
      console.log("request success!!!");
      return symbolActions.refreshSymbolName.success([]);
    })
  );
};

export const refreshSymbolNamesEpic: Epic<
  IRootAction,
  IRootAction,
  IRootState
> = action$ => {
  return action$.pipe(
    filter(isActionOf(symbolActions.refreshSymbolName.request)),
    switchMap(() => {
      return getSymbolNames().then(value => {
        return isError<ISymbolName[]>(value)
          ? symbolActions.refreshSymbolName.failure(value)
          : symbolActions.refreshSymbolName.success(value);
      });
    })
  );
};
