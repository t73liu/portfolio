import {
  ApiErrorResponse,
  ApiResponse,
  create,
  DEFAULT_HEADERS
} from "apisauce";
import { Linking } from "react-native";
import IDictionary from "../common/models/IDictionary";
import ISymbolData from "../stock/models/ISymbolData";
import ISymbolName from "../symbols/models/ISymbolName";

export function openUrl(url: string): void {
  Linking.openURL(url).catch(err =>
    console.error(`Unable to open url: ${url}`, err)
  );
}

const api = create({
  baseURL: "https://api.iextrading.com/1.0",
  headers: DEFAULT_HEADERS,
  timeout: 10000
});

export interface IError {
  problem: string;
  explanation: string;
}

export function isError<T>(value: T | IError): value is IError {
  const error = value as IError;
  return error.problem !== undefined && error.explanation !== undefined;
}

// https://api.iextrading.com/1.0/ref-data/symbols?filter=symbol,name [updated daily at 7:45 a.m. ET]
export async function getSymbolNames(): Promise<ISymbolName[] | IError> {
  return api
    .get<ISymbolName[]>("/ref-data/symbols?filter=symbol,name")
    .then(
      value =>
        isApiErrorResponse<ISymbolName[]>(value)
          ? getUnhandledError(value.problem)
          : (value!.data as ISymbolName[]),
      reason => getUnhandledError(reason)
    );
}

// https://iextrading.com/developer/docs/#batch-requests [Up to 10 types]
export async function getMarketData(
  tickers: string[]
): Promise<IDictionary<ISymbolData> | IError> {
  if (tickers.length < 1 || tickers.length > 100) {
    throw new Error("Number of tickers need to be between 1 to 100");
  }
  return api
    .get<IDictionary<ISymbolData>>(
      `/stock/market/batch?symbols=${tickers.join()}&types=quote,news&last=15`
    )
    .then(
      (value: ApiResponse<IDictionary<ISymbolData>>) =>
        isApiErrorResponse<IDictionary<ISymbolData>>(value)
          ? getUnhandledError(value.problem)
          : (value!.data as IDictionary<ISymbolData>),
      reason => getUnhandledError(reason)
    );
}

function isApiErrorResponse<T>(
  response: ApiResponse<T>
): response is ApiErrorResponse<T> {
  return response.problem !== null;
}

function getUnhandledError(reason: any): IError {
  return {
    problem: reason.toString(),
    explanation: reason.toString()
  };
}
