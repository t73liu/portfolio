import * as R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/batch.json";
import IDictionary from "../../common/models/IDictionary";
import IMarketData from "../models/IMarketData";
import ISymbolData from "../models/ISymbolData";
import { refreshMarketData } from "./actions";

export type RefreshMarketActions = ActionType<typeof refreshMarketData>;

const initialState: IMarketData = {
  symbolData: data as IDictionary<ISymbolData>,
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
      return R.assoc("symbolData", action.payload, state);
    case getType(refreshMarketData.failure):
      return state;
    default:
      return state;
  }
}
