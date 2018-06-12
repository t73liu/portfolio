import { createAsyncAction } from "typesafe-actions";
import { IMarketData } from "../../types";
import { IError } from "../../util/ajax";

export const refreshMarketData = createAsyncAction(
  "REFRESH_MARKET_DATA_REQUEST",
  "REFRESH_MARKET_DATA_SUCCESS",
  "REFRESH_MARKET_DATA_FAILURE"
)<void, IMarketData, IError>();
