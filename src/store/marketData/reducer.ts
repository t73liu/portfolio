import {Map} from 'immutable';

import {MarketData, SymbolData} from "../types";
import {ActionTypes} from "../actionTypes";

const initialState: MarketData = {
    symbolData: Map<string, SymbolData>(),
    isRefreshing: false,
    lastUpdated: new Date()
};

export function MarketDataReducer(state: MarketData = initialState, action: ActionTypes): MarketData {
    switch (action.type) {
        default:
            return state;
    }
}
