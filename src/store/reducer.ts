import {AsyncStorage} from 'react-native';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import {PersistConfig} from "redux-persist/es/types";
import {persistCombineReducers} from 'redux-persist/es/persistCombineReducers';

import {WatchlistReducer} from './watchlist/reducer';
import {StoreState} from './types';

const persistConfig: PersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
};

// cast as any because of redux-persist using outdated redux
export const rootReducer = persistCombineReducers<StoreState>(persistConfig, {
    watchlist: WatchlistReducer
} as any);
