import {create} from 'apisauce'
import { Linking } from "react-native";

import INewsItem from "../news/models/INewsItem";

export function openUrl(url: string): void {
  Linking.openURL(url).catch(err =>
    console.error(`Unable to open url: ${url}`, err)
  );
}

export function openTickerUI(ticker: string): void {
  openUrl(`https://finance.yahoo.com/quote/${ticker}/`);
}

const api = create({
  baseURL: 'https://api.iextrading.com/1.0',
  headers: {'Accept': 'application/json'},
  timeout: 10000
});

export interface IError {
  problem: string;
  explanation: string;
}

// https://iextrading.com/developer/docs/#batch-requests [Up to 10 types]
export async function getMarketData(tickers: string[]) {
  if (tickers.length < 1 || tickers.length > 100) {
    throw new Error("Number of tickers need to be between 1 to 100");
  }
  const request = await fetch(
    `https://api.iextrading.com/1.0/stock/market/batch?symbols=${tickers.join()}&types=quote,news&last=15`
  );
  return request.json();
}

export async function getNews(
  ticker: string,
  amount: string = "5"
): Promise<INewsItem[]> {
  const count = parseInt(amount, 10);
  if (count < 1 || count > 50) {
    throw new Error("Amount needs to be between 1 to 50");
  }
  const request = await fetch(
    `https://api.iextrading.com/1.0/stock/${ticker}/news/last/${count}`
  );
  return request.json();
}

function objToStrMap(str: string) {
  const strMap = new Map();
  const obj = JSON.parse(str);
  for (const k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
