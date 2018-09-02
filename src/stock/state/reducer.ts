import * as R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/batch.json";
import IDictionary from "../../common/models/IDictionary";
import { formatIErrorToString } from "../../util/ajax";
import IMarketData from "../models/IMarketData";
import ISymbolData from "../models/ISymbolData";
import * as marketActions from "./actions";

export type RefreshMarketActions = ActionType<typeof marketActions>;

const initialState: IMarketData = {
  symbolData: data as IDictionary<ISymbolData>,
  isLoading: false,
  lastUpdated: new Date(1535659200477),
  errorMsg: null
};

export default function marketDataReducer(
  state: IMarketData = initialState,
  action: RefreshMarketActions
): IMarketData {
  switch (action.type) {
    case getType(marketActions.refreshMarketData.request):
      return R.assoc("isLoading", true, state);
    case getType(marketActions.refreshMarketData.success):
      return {
        symbolData: action.payload,
        isLoading: false,
        lastUpdated: new Date(),
        errorMsg: null
      };
    case getType(marketActions.refreshMarketData.failure):
      return {
        ...state,
        isLoading: false,
        errorMsg: formatIErrorToString(action.payload)
      };
    case getType(marketActions.downloadTickerData.request):
      return R.assoc("isLoading", true, state);
    case getType(marketActions.downloadTickerData.success):
      const symbol = action.payload.quote.symbol;
      return {
        isLoading: false,
        symbolData: R.assoc(symbol, action.payload, state.symbolData),
        lastUpdated: state.lastUpdated,
        errorMsg: null
      };
    case getType(marketActions.downloadTickerData.failure):
      return {
        ...state,
        isLoading: false,
        errorMsg: formatIErrorToString(action.payload)
      };
    case getType(marketActions.dismissMarketDataError):
      return R.assoc("errorMsg", null, state);
    default:
      return state;
  }
}
