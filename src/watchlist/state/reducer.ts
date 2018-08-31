import * as R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/watchlist.json";
import * as watchlist from "./actions";

export type WatchlistActions = ActionType<typeof watchlist>;

const placeholder = data as string[];

export default function watchlistReducer(
  state: string[] = placeholder,
  action: WatchlistActions
): string[] {
  switch (action.type) {
    case getType(watchlist.addTicker):
      return R.prepend(action.payload, state);
    case getType(watchlist.removeTicker):
      return R.filter(ticker => ticker !== action.payload, state);
    default:
      return state;
  }
}
