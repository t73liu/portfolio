import { Epic } from "redux-observable";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import IDictionary from "../../common/models/IDictionary";
import { IRootAction, IRootState } from "../../store";
import { getMarketData, getTickerData, isError } from "../../util/ajax";
import ISymbolData from "../models/ISymbolData";
import { downloadTickerData, refreshMarketData } from "./actions";

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

export const downloadTickerDataEpic: Epic<
  IRootAction,
  IRootAction,
  IRootState
> = action$ => {
  return action$.pipe(
    filter(isActionOf(downloadTickerData.request)),
    switchMap(action => {
      return getTickerData(action.payload).then(value => {
        return isError<ISymbolData>(value)
          ? downloadTickerData.failure(value)
          : downloadTickerData.success(value);
      });
    })
  );
};
