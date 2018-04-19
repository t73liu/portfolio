import {ActionTypes} from '../actionTypes';
import {ActionTypeKeys} from '../actionTypeKeys';

export function WatchlistReducer(state: string[] = [], action: ActionTypes): string[] {
    switch (action.type) {
        case ActionTypeKeys.ADD_WATCHLIST_TICKER:
            if (state.indexOf(action.payload.ticker) == -1) {
                return [...state, action.payload.ticker];
            } else {
                return state;
            }
        case ActionTypeKeys.REMOVE_WATCHLIST_TICKER:
            const index = state.indexOf(action.payload.ticker);
            if (index == -1) {
                return state;
            } else {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
        default:
            return state;
    }
}
