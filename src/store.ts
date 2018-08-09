import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import marketDataReducer, { RefreshMarketActions } from "./market/state/reducer";
import symbolDataReducer from "./symbols/state/reducer";
import watchlistReducer, { WatchlistActions } from "./watchlist/state/reducer";

const rootReducer = combineReducers({
  symbolData: symbolDataReducer,
  marketData: marketDataReducer,
  watchlist: watchlistReducer
});

export type IRootState = StateType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

export type IRootAction = WatchlistActions | RefreshMarketActions;

// const rootEpic = combineEpics({});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  persistReducer(persistConfig, rootReducer as any),
  applyMiddleware(epicMiddleware)
);

// epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

export default store;
