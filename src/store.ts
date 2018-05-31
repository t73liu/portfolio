import { AsyncStorage } from "react-native";
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import marketDataReducer from "./common/state/reducer";
import watchlistReducer from "./watchlist/state/reducer";

export const rootReducer = combineReducers({
  marketData: marketDataReducer,
  watchlist: watchlistReducer
});

export type IRootState = StateType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const store = createStore(persistReducer(persistConfig, rootReducer as any));

export const persistor = persistStore(store);

export default store;
