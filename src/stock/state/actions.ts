import { createAsyncAction } from "typesafe-actions";
import { IError } from "../../util/ajax";
import IMarketData from "../models/IMarketData";

export const refreshMarketData = createAsyncAction(
  "REFRESH_MARKET_DATA_REQUEST",
  "REFRESH_MARKET_DATA_SUCCESS",
  "REFRESH_MARKET_DATA_FAILURE"
)<void, IMarketData, IError>();
