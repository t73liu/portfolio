import {
  ApiErrorResponse,
  ApiResponse,
  create,
  DEFAULT_HEADERS,
  PROBLEM_CODE
} from "apisauce";
import * as R from "rambda";
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
          : (value!.data as ISymbolName[])
    );
}

// https://iextrading.com/developer/docs/#batch-requests [Up to 10 types]
export async function getMarketData(
  tickers: string[]
): Promise<IDictionary<ISymbolData> | IError> {
  if (tickers.length === 0) {
    return {
      problem: "User Error",
      explanation: "No tickers in watchlist/portfolio"
    };
  }
  const splitTickers = R.splitEvery(100, tickers);
  let result: IDictionary<ISymbolData> | IError = {};
  for (const tickerSet of splitTickers) {
    await getMarketDataWithinLimit(tickerSet).then(value => {
      result = isError<IDictionary<ISymbolData>>(value)
        ? value
        : R.merge(result, value);
    });
    if (isError<IDictionary<ISymbolData>>(result)) {
      break;
    }
  }
  return result;
}

const requiredTypes =
  "types=peers,stats,quote,financials,news,chart&period=annual&last=10&range=1y";

async function getMarketDataWithinLimit(
  tickers: string[]
): Promise<IDictionary<ISymbolData> | IError> {
  return api
    .get<IDictionary<ISymbolData>>(
      `/stock/market/batch?symbols=${tickers.join()}&${requiredTypes}`
    )
    .then(
      (value: ApiResponse<IDictionary<ISymbolData>>) =>
        isApiErrorResponse<IDictionary<ISymbolData>>(value)
          ? getUnhandledError(value.problem)
          : (value!.data as IDictionary<ISymbolData>)
    );
}

export async function getTickerData(
  ticker: string
): Promise<ISymbolData | IError> {
  return api
    .get<ISymbolData>(`/stock/${ticker}/batch?&${requiredTypes}`)
    .then(
      (value: ApiResponse<ISymbolData>) =>
        isApiErrorResponse<ISymbolData>(value)
          ? getUnhandledError(value.problem)
          : (value!.data as ISymbolData)
    );
}

function isApiErrorResponse<T>(
  response: ApiResponse<T>
): response is ApiErrorResponse<T> {
  return response.problem !== null;
}

const errorMap = {
  CLIENT_ERROR: "Client request issue [HTTP 400s].",
  SERVER_ERROR: "Internal server issue [HTTP 500s].",
  TIMEOUT_ERROR: "Server didn't respond in time.",
  CONNECTION_ERROR: "Server not available, bad DNS.",
  NETWORK_ERROR: "Network not available.",
  UNKNOWN_ERROR: "Unknown underlying issue.",
  CANCEL_ERROR: "Request has been cancelled."
};

function getUnhandledError(reason: PROBLEM_CODE): IError {
  return {
    problem: reason,
    explanation: errorMap[reason]
  };
}

export function formatIErrorToString(error: IError): string {
  return `${error.problem}: ${error.explanation}`;
}
