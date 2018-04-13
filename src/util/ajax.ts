import {Linking} from "react-native";
import NewsItem from "../news/NewsItem";

export function openUrl(url: string): void {
    Linking.openURL(url).catch(err => console.error(`Unable to open url: ${url}`, err));
}

export async function getNews(ticker: string, amount: string = "5"): Promise<NewsItem[]> {
    let request = await fetch(`https://api.iextrading.com/1.0/stock/${ticker}/news/last/${parseInt(amount)}`);
    return await request.json();
}
