import { Epic } from "redux-observable";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { IRootAction, IRootState } from "../../store";
import { getSymbolNames, isError } from "../../util/ajax";
import ISymbolName from "../models/ISymbolName";
import * as symbolActions from "./actions";

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

// TODO - not required, change to stock interval instead?
// export const intervalRequestSymbolNameEpic: Epic<
//   IRootAction,
//   IRootAction,
//   IRootState
// > = () => {
//   return interval(1000000).pipe(
//     map(() => {
//       return symbolActions.refreshSymbolName.request();
//     })
//   );
// };
