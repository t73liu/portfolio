import { ActionCreator } from "redux";

import { ActionTypeKeys } from "../actionTypeKeys";
import { IAddWatchlistTicker, IRemoveWatchlistTicker } from "./actionTypes";

export const addWatchlistTicker: ActionCreator<IAddWatchlistTicker> = (
  newTicker: string
) => ({
  type: ActionTypeKeys.ADD_WATCHLIST_TICKER,
  payload: {
    ticker: newTicker
  }
});

export const removeWatchlistTicker: ActionCreator<IRemoveWatchlistTicker> = (
  existingTicker: string
) => ({
  type: ActionTypeKeys.REMOVE_WATCHLIST_TICKER,
  payload: {
    ticker: existingTicker
  }
});
