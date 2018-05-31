import { AsyncStorage } from "react-native";
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import { MarketDataReducer } from "./store/marketData/reducer";
import { PortfolioReducer } from "./store/portfolio/reducer";
import { SupportedSymbolReducer } from "./store/supportedSymbols/reducers";
import { WatchlistReducer } from "./store/watchlist/reducer";

export const rootReducer = combineReducers({
  marketData: MarketDataReducer,
  watchlist: WatchlistReducer,
  supportedSymbols: SupportedSymbolReducer,
  portfolio: PortfolioReducer
});

export type IRootState = StateType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const store = createStore(persistReducer(persistConfig, rootReducer as any));

export const persistor = persistStore(store);

export default store;
