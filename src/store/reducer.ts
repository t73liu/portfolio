import {combineReducers} from 'redux';

import {StoreState} from './types';
import {WatchlistReducer} from './watchlist/reducer';
import {PortfolioReducer} from './portfolio/reducer';
import {MarketDataReducer} from './marketData/reducer';
import {SupportedSymbolReducer} from './supportedSymbols/reducers';

export const rootReducer = combineReducers<StoreState>({
    marketData: MarketDataReducer,
    watchlist: WatchlistReducer,
    supportedSymbols: SupportedSymbolReducer,
    portfolio: PortfolioReducer
} as any);
