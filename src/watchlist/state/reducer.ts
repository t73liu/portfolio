import { ActionType, getType } from "typesafe-actions";
import * as watchlist from "./actions";

type WatchlistActions = ActionType<typeof watchlist>;

export default function watchlistReducer(
  state: string[] = [],
  action: WatchlistActions
): string[] {
  switch (action.type) {
    case getType(watchlist.addTicker):
      return [...state, action.payload];
    case getType(watchlist.removeTicker):
      return state.filter(ticker => ticker !== action.payload);
    default:
      return state;
  }
}
