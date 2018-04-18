import {StoreState} from '../types';
import {ActionTypes} from '../actionTypes';
import {ActionTypeKeys} from '../actionTypeKeys';

export const initialState: StoreState = {
    marketData: new Map(),
    portfolio: [],
    watchlist: []
};

export function WatchlistReducer(state: StoreState = initialState, action: ActionTypes): StoreState {
    switch (action.type) {
        case ActionTypeKeys.ADD_WATCHLIST_TICKER:
            if (state.watchlist.indexOf(action.payload.ticker) == -1) {
                return {
                    watchlist: [...state.watchlist, action.payload.ticker],
                    ...state
                };
            } else {
                return state;
            }
        case ActionTypeKeys.REMOVE_WATCHLIST_TICKER:
            const index = state.watchlist.indexOf(action.payload.ticker);
            if (index == -1) {
                return state;
            } else {
                return {
                    watchlist: [...state.watchlist].splice(index, 1),
                    ...state
                };
            }
        default:
            return state;
    }
}
