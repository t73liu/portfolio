import { Epic } from "redux-observable";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import IDictionary from "../../common/models/IDictionary";
import { IRootAction, IRootState } from "../../store";
import { getMarketData, isError } from "../../util/ajax";
import ISymbolData from "../models/ISymbolData";
import { refreshMarketData } from "./actions";

export const refreshMarketDataEpic: Epic<
  IRootAction,
  IRootAction,
  IRootState
> = (action$, state$) => {
  return action$.pipe(
    filter(isActionOf(refreshMarketData.request)),
    switchMap(() => {
      return getMarketData(state$.value.watchlist).then(value => {
        return isError<IDictionary<ISymbolData>>(value)
          ? refreshMarketData.failure(value)
          : refreshMarketData.success(value);
      });
    })
  );
};
