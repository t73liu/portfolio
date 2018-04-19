import {StoreState} from "../types";
import {ActionTypes} from "../actionTypes";

const initialState: StoreState = {
    marketData: {
        symbolData: new Map(),
        isRefreshing: false,
        lastUpdated: new Date()
    },
    portfolio: [],
    watchlist: []
};

export function MarketDataReducer(state: StoreState = initialState, action: ActionTypes): StoreState {
    switch (action.type) {
        default:
            return state;
    }
}
