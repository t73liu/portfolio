import { Epic } from "redux-observable";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { IRootAction, IRootState } from "../../store";
import { getMarketData } from "../../util/ajax";
import { refreshMarketData } from "./actions";

export const refreshMarketDataEpic: Epic<IRootAction, IRootAction, IRootState> = (action$, state$) => {
  return action$.pipe(
    filter(isActionOf(refreshMarketData.request)),
    switchMap(action =>
      getMarketData(state$.value.watchlist)
        .then(value => refreshMarketData.success(value),
          reason => refreshMarketData.failure({ problem: reason, explanation: reason }))
    ));
};
