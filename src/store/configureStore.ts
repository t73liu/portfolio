import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

import {rootReducer} from './reducer';
import {StoreState} from './types';

const initialState: StoreState = {
    watchlist: ['AMZN']
};

export const store = createStore(rootReducer, initialState);
export const persistor = persistStore(store);
