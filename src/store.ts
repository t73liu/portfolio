import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import portfolioReducer, { PortfolioActions } from "./portfolio/state/reducer";
import {
  downloadTickerDataEpic,
  refreshMarketDataEpic
} from "./stock/state/epics";
import marketDataReducer, { RefreshMarketActions } from "./stock/state/reducer";
import { refreshSymbolNamesEpic } from "./symbols/state/epics";
import symbolNameReducer, { SymbolNameActions } from "./symbols/state/reducer";
import watchlistReducer, { WatchlistActions } from "./watchlist/state/reducer";

const rootReducer = combineReducers({
  symbolName: symbolNameReducer,
  marketData: marketDataReducer,
  portfolio: portfolioReducer,
  watchlist: watchlistReducer
});

export type IRootState = StateType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

export type IRootAction =
  | WatchlistActions
  | RefreshMarketActions
  | SymbolNameActions
  | PortfolioActions;

const rootEpic = combineEpics(
  refreshMarketDataEpic,
  downloadTickerDataEpic,
  refreshSymbolNamesEpic
);

const epicMiddleware = createEpicMiddleware<
  IRootAction,
  IRootAction,
  IRootState
>();

const store = createStore(
  persistReducer(persistConfig, rootReducer as any),
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

// Used to reset store
// persistor.purge();

export default store;
