import { Action } from "redux";

import { ActionTypeKeys } from "../actionTypeKeys";

export interface IAddWatchlistTicker extends Action {
  readonly type: ActionTypeKeys.ADD_WATCHLIST_TICKER;
  readonly payload: {
    readonly ticker: string;
  };
}

export interface IRemoveWatchlistTicker extends Action {
  readonly type: ActionTypeKeys.REMOVE_WATCHLIST_TICKER;
  readonly payload: {
    readonly ticker: string;
  };
}
