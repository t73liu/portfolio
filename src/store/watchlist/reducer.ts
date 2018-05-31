import { ActionTypeKeys } from "../actionTypeKeys";
import { ActionTypes } from "../actionTypes";

export function WatchlistReducer(
  state: string[] = [],
  action: ActionTypes
): string[] {
  switch (action.type) {
    case ActionTypeKeys.ADD_WATCHLIST_TICKER:
      const addIndex = state.indexOf(action.payload.ticker);
      if (addIndex === -1) {
        state.push(action.payload.ticker);
      }
      return state;
    case ActionTypeKeys.REMOVE_WATCHLIST_TICKER:
      return state.filter(value => value === action.payload.ticker);
    default:
      return state;
  }
}
