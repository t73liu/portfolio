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
      return [...state, action.payload];
    case getType(watchlist.removeTicker):
      return state.filter(ticker => ticker !== action.payload);
    default:
      return state;
  }
}
