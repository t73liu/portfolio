import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import marketDataReducer, {
  RefreshMarketActions
} from "./market/state/reducer";
import portfolioReducer, { PortfolioActions } from "./portfolio/state/reducer";
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

// const rootEpic = combineEpics({});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  persistReducer(persistConfig, rootReducer as any),
  applyMiddleware(epicMiddleware)
);

// epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

// Used to reset store
// persistor.purge();

export default store;
