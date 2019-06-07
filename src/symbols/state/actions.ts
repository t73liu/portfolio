import { createAction, createAsyncAction } from "typesafe-actions";
import { IError } from "../../util/ajax";
import ISymbolName from "../models/ISymbolName";

export const refreshSymbolName = createAsyncAction(
  "REFRESH_SYMBOL_DATA_REQUEST",
  "REFRESH_SYMBOL_DATA_SUCCESS",
  "REFRESH_SYMBOL_DATA_FAILURE"
)<undefined, ISymbolName[], IError>();

export const searchSymbol = createAction("SYMBOL_SEARCH", resolve => {
  return (query: string) => resolve(query);
});

export const dismissSymbolDataError = createAction(
  "DISMISS_SYMBOL_DATA_ERROR",
  resolve => {
    return () => resolve();
  }
);
