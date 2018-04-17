import {Linking} from 'react-native';

import NewsItem from '../news/NewsItem';

export function openUrl(url: string): void {
    Linking.openURL(url).catch(err => console.error(`Unable to open url: ${url}`, err));
}

export function openTickerUI(ticker: string): void {
    openUrl(`https://finance.yahoo.com/quote/${ticker}/`);
}

// https://iextrading.com/developer/docs/#batch-requests [Up to 10 types]
export async function getMarketData(tickers: string[]) {
    if (tickers.length < 1 || tickers.length > 100) {
        throw new Error('Number of tickers need to be between 1 to 100');
    }
    let request = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${tickers.join()}&types=quote,news&last=15`);
    return await request.json();
}

export async function getNews(ticker: string, amount: string = "5"): Promise<NewsItem[]> {
    const count = parseInt(amount);
    if (count < 1 || count > 50) {
        throw new Error('Amount needs to be between 1 to 50');
    }
    let request = await fetch(`https://api.iextrading.com/1.0/stock/${ticker}/news/last/${count}`);
    return await request.json();
}
