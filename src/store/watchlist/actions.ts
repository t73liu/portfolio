import {ActionCreator} from 'redux';

import {AddWatchlistTicker, RemoveWatchlistTicker} from './actionTypes';
import {ActionTypeKeys} from '../actionTypeKeys';

export const addWatchlistTicker: ActionCreator<AddWatchlistTicker> = (newTicker: string) => ({
    type: ActionTypeKeys.ADD_WATCHLIST_TICKER,
    payload: {
        ticker: newTicker
    }
});

export const removeWatchlistTicker: ActionCreator<RemoveWatchlistTicker> = (existingTicker: string) => ({
    type: ActionTypeKeys.REMOVE_WATCHLIST_TICKER,
    payload: {
        ticker: existingTicker
    }
});
