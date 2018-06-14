import { ActionType, getType } from "typesafe-actions";
import { symbolData } from "../../offline/symbolData";
import { IMarketData } from "../../types";
import { refreshMarketData } from "./actions";

export type RefreshMarketActions = ActionType<typeof refreshMarketData>;

const initialState: IMarketData = {
  symbolData,
  isRefreshing: false,
  lastUpdated: new Date()
};

export default function marketDataReducer(
  state: IMarketData = initialState,
  action: RefreshMarketActions
): IMarketData {
  switch (action.type) {
    case getType(refreshMarketData.request):
      return state;
    case getType(refreshMarketData.success):
      return state;
    case getType(refreshMarketData.failure):
      return state;
    default:
      return state;
  }
}
