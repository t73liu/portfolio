export default interface IQuote {
  symbol: string;
  companyName: string;
  primaryExchange: string;
  sector: string;
  open: number;
  openTime: number; // millisecond timestamp to be formatted
  close: number;
  closeTime: number; // millisecond timestamp to be formatted
  high: number;
  low: number;
  latestPrice: number;
  latestUpdate: number; // millisecond timestamp to be formatted
  latestVolume: number;
  delayedPrice: number;
  delayedPriceTime: number; // millisecond timestamp to be formatted
  previousClose: number;
  change: number;
  changePercent: number;
  avgTotalVolume: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}
