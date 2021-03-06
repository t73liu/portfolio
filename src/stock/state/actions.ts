import { createAction, createAsyncAction } from "typesafe-actions";
import IDictionary from "../../common/models/IDictionary";
import { IError } from "../../util/ajax";
import ISymbolData from "../models/ISymbolData";

export const refreshMarketData = createAsyncAction(
  "REFRESH_MARKET_DATA_REQUEST",
  "REFRESH_MARKET_DATA_SUCCESS",
  "REFRESH_MARKET_DATA_FAILURE"
)<undefined, IDictionary<ISymbolData>, IError>();

export const downloadTickerData = createAsyncAction(
  "DOWNLOAD_TICKER_DATA_REQUEST",
  "DOWNLOAD_TICKER_DATA_SUCCESS",
  "DOWNLOAD_TICKER_DATA_FAILURE"
)<string, ISymbolData, IError>();

export const dismissMarketDataError = createAction(
  "DISMISS_MARKET_DATA_ERROR",
  resolve => {
    return () => resolve();
  }
);
