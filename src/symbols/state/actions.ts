import { createAsyncAction } from "typesafe-actions";
import { IError } from "../../util/ajax";
import ISymbolName from "../models/ISymbolName";

export const refreshSymbolName = createAsyncAction(
  "REFRESH_SYMBOL_DATA_REQUEST",
  "REFRESH_SYMBOL_DATA_SUCCESS",
  "REFRESH_SYMBOL_DATA_FAILURE"
)<void, ISymbolName[], IError>();
