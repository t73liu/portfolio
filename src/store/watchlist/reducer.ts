import {List} from "immutable";

import {ActionTypes} from '../actionTypes';
import {ActionTypeKeys} from '../actionTypeKeys';

export function WatchlistReducer(state: List<string> = List(), action: ActionTypes): List<string> {
    switch (action.type) {
        case ActionTypeKeys.ADD_WATCHLIST_TICKER:
            const addIndex = state.indexOf(action.payload.ticker);
            return addIndex == -1 ? state.push(action.payload.ticker) : state;
        case ActionTypeKeys.REMOVE_WATCHLIST_TICKER:
            const removeIndex = state.indexOf(action.payload.ticker);
            return removeIndex == -1 ? state : state.remove(removeIndex);
        default:
            return state;
    }
}
