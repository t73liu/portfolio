import { createAsyncAction } from "typesafe-actions";
import IDictionary from "../../common/models/IDictionary";
import { IError } from "../../util/ajax";
import ISymbolData from "../models/ISymbolData";

export const refreshMarketData = createAsyncAction(
  "REFRESH_MARKET_DATA_REQUEST",
  "REFRESH_MARKET_DATA_SUCCESS",
  "REFRESH_MARKET_DATA_FAILURE"
)<void, IDictionary<ISymbolData>, IError>();
