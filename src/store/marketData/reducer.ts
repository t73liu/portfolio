import { ActionTypes } from "../actionTypes";
import { IMarketData } from "../types";

const initialState: IMarketData = {
  symbolData: new Map(),
  isRefreshing: false,
  lastUpdated: new Date()
};

export function MarketDataReducer(
  state: IMarketData = initialState,
  action: ActionTypes
): IMarketData {
  switch (action.type) {
    default:
      return state;
  }
}
