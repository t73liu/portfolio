import { Epic } from "redux-observable";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { IRootAction, IRootState } from "../../store";
import { getMarketData, isError } from "../../util/ajax";
import IMarketData from "../models/IMarketData";
import { refreshMarketData } from "./actions";

export const refreshMarketDataEpic: Epic<
  IRootAction,
  IRootAction,
  IRootState
> = (action$, state$) => {
  return action$.pipe(
    filter(isActionOf(refreshMarketData.request)),
    switchMap(action =>
      getMarketData(state$.value.watchlist).then(
        value =>
          isError<IMarketData>(value)
            ? refreshMarketData.failure(value)
            : refreshMarketData.success(value)
      )
    )
  );
};
