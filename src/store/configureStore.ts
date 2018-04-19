import {createStore} from 'redux';

import {rootReducer} from './reducer';
import {StoreState, SymbolData} from './types';

export const initialState: StoreState = {
    marketData: {
        symbolData: new Map<string, SymbolData>([["NFLX", {news: [], quote: {ytdChange: 15}}]]),
        isRefreshing: false,
        lastUpdated: new Date()
    },
    portfolio: [],
    watchlist: ["NFLX"]
};

export const store = createStore(rootReducer, initialState);
