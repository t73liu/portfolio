import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import marketDataReducer, { FetchActions } from "./common/state/reducer";
import watchlistReducer, { WatchlistActions } from "./watchlist/state/reducer";

const rootReducer = combineReducers({
  marketData: marketDataReducer,
  watchlist: watchlistReducer
});

export type IRootState = StateType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

export type IRootAction = WatchlistActions | FetchActions;

const rootEpic = combineEpics({});

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  persistReducer(persistConfig, rootReducer as any),
  applyMiddleware(epicMiddleware)
);

export const persistor = persistStore(store);

export default store;
