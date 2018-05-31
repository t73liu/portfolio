import { ActionType, getType } from "typesafe-actions";
import { initialState } from "../../configureStore";
import { IMarketData } from "../../types";
import * as fetch from "./actions";

type FetchActions = ActionType<typeof fetch>;

export default function marketDataReducer(
  state: IMarketData = initialState.marketData,
  action: FetchActions
): IMarketData {
  switch (action.type) {
    case getType(fetch.update):
      return state;
    default:
      return state;
  }
}
