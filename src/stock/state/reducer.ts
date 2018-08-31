import * as R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/batch.json";
import IDictionary from "../../common/models/IDictionary";
import IMarketData from "../models/IMarketData";
import ISymbolData from "../models/ISymbolData";
import * as marketActions from "./actions";

export type RefreshMarketActions = ActionType<typeof marketActions>;

const initialState: IMarketData = {
  symbolData: data as IDictionary<ISymbolData>,
  isRefreshing: false,
  lastUpdated: new Date(1535659200477)
};

export default function marketDataReducer(
  state: IMarketData = initialState,
  action: RefreshMarketActions
): IMarketData {
  switch (action.type) {
    case getType(marketActions.refreshMarketData.request):
      return state;
    case getType(marketActions.refreshMarketData.success):
      return R.assoc("symbolData", action.payload, state);
    case getType(marketActions.refreshMarketData.failure):
      // TODO expose notification for failed requests
      return state;
    case getType(marketActions.downloadTickerData.request):
      return state;
    case getType(marketActions.downloadTickerData.success):
      const symbol = action.payload.quote.symbol;
      return R.assoc(`symbolData.${symbol}`, action.payload, state);
    case getType(marketActions.downloadTickerData.failure):
      // TODO expose notification for failed requests
      return state;
    default:
      return state;
  }
}
