import {List, Map} from 'immutable';

import NewsItem from '../news/NewsItem';

export interface StoreState {
    supportedSymbols: List<SymbolName>
    watchlist: List<string>
    portfolio: List<Holding>
    marketData: MarketData
}

export interface SymbolName {
    symbol: string
    name?: string
}

export interface Holding {
    ticker: string
    amount: number
    buyPrice: number
}

export interface MarketData {
    symbolData: Map<string, SymbolData>
    isRefreshing: boolean
    lastUpdated: Date
}

export interface SymbolData {
    quote: Quote
    news: List<NewsItem>
}

export interface Quote {
    symbol: string,
    companyName: string,
    primaryExchange: string,
    sector: string,
    open: number,
    openTime: number, // millisecond timestamp to be formatted
    close: number,
    closeTime: number, // millisecond timestamp to be formatted
    high: number,
    low: number,
    latestPrice: number,
    latestUpdate: number, // millisecond timestamp to be formatted
    latestVolume: number,
    delayedPrice: number,
    delayedPriceTime: number, // millisecond timestamp to be formatted
    previousClose: number,
    change: number,
    changePercent: number,
    avgTotalVolume: number,
    marketCap: number,
    peRatio: number,
    week52High: number,
    week52Low: number,
    ytdChange: number
}
