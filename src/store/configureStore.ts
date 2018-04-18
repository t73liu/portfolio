import {createStore} from 'redux';

import {rootReducer} from './reducer';
import {StoreState} from './types';

const initialState: StoreState = {
    marketData: new Map(),
    portfolio: [],
    watchlist: ["AMZN", "NFLX", "MSFT"]
};

export const store = createStore(rootReducer, initialState);
