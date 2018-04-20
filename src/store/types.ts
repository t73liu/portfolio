import NewsItem from '../news/NewsItem';

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

export interface SingleDayChart {
    high: number,
    low: number,
    volume: number,
    label: number,
    changeOverTime: number,
    date: string, // formatted date yyyy-MM-dd
    open: number,
    close: number,
    unadjustedVolume: number,
    change: number,
    changePercent: number,
    vwap: number
}

export interface MultiDayChart {
    high: number,
    low: number,
    volume: number,
    label: number,
    changeOverTime: number,
    date: string, // formatted date yyyy-MM-dd
    open: number,
    close: number,
    unadjustedVolume: number,
    change: number,
    changePercent: number,
    vwap: number
}

export interface SymbolData {
    quote: Quote
    news: NewsItem[]
}

export interface SymbolName {
    symbol: string
    name?: string
}

export interface Dictionary<T> {
    [key: string]: T;
}

export interface MarketData {
    symbolData: Dictionary<SymbolData>
    isRefreshing: boolean
    lastUpdated: Date
}

export interface Holding {
    ticker: string
    amount: number
    buyPrice: number
}

export interface StoreState {
    marketData: MarketData
    supportedSymbols: SymbolName[]
    portfolio: Holding[]
    watchlist: string[]
}
