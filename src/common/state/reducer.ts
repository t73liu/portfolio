import { ActionType, getType } from "typesafe-actions";
import { symbolData } from "../../offline/symbolData";
import { IMarketData } from "../../types";
import * as fetch from "./actions";

export type FetchActions = ActionType<typeof fetch>;

const initialState: IMarketData = {
  symbolData,
  isRefreshing: false,
  lastUpdated: new Date()
};

export default function marketDataReducer(
  state: IMarketData = initialState,
  action: FetchActions
): IMarketData {
  switch (action.type) {
    case getType(fetch.update):
      return state;
    default:
      return state;
  }
}
