import {combineReducers} from 'redux';

import {WatchlistReducer} from './watchlist/reducer';
import {StoreState} from './types';

// TODO remove placeholder reducers
export const rootReducer = combineReducers<StoreState>({
    marketData: WatchlistReducer,
    portfolio: WatchlistReducer,
    watchlist: WatchlistReducer
} as any);
