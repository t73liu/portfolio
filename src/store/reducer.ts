import {combineReducers} from 'redux';

import {StoreState} from './types';
import {WatchlistReducer} from './watchlist/reducer';
import {PortfolioReducer} from './portfolio/reducer';
import {MarketDataReducer} from './marketData/reducer';

export const rootReducer = combineReducers<StoreState>({
    marketData: MarketDataReducer,
    watchlist: WatchlistReducer,
    portfolio: PortfolioReducer
} as any);
