import {combineReducers} from 'redux';

import {WatchlistReducer} from './watchlist/reducer';
import {StoreState} from './types';

export const rootReducer = combineReducers<StoreState>({
    watchlist: WatchlistReducer
} as any);
