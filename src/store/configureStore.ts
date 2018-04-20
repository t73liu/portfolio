import {AsyncStorage} from "react-native";
import {createStore, Store} from "redux";
import {rootReducer} from "./reducer";

import {StoreState} from './types';
import {symbolNames} from "./offline/symbolNames";
import {symbolData} from "./offline/symbolData";

export const initialState: StoreState = {
    marketData: {
        symbolData: symbolData,
        isRefreshing: false,
        lastUpdated: new Date()
    },
    supportedSymbols: symbolNames,
    portfolio: [
        {
            ticker: "MSFT",
            amount: 1000,
            buyPrice: 96.11
        },
        {
            ticker: "AMD",
            amount: 1000,
            buyPrice: 10.11
        }
    ],
    watchlist: ["NFLX", "ATVI"]
};

export async function getPersistedStore(): Promise<Store<StoreState>> {
    const state = await AsyncStorage.getItem("state")
        .then(value => {
            if (value && value.length) {
                console.log("AsyncStorage Found, Using Saved State");
                return JSON.parse(value) as StoreState;
            }
            console.log(`No AsyncStorage Found, Using Initial State, value: ${value}`);
            return initialState;
        })
        .catch(reason => {
            console.log(`No State Found, Reason: ${reason}`);
            return initialState;
        });
    return createStore(rootReducer, state);
}

export const defaultStore: Store<StoreState> = createStore(rootReducer, initialState);
