export default interface ISymbolKeyStats {
  priceToSales: number;
  dividendYield: number;
  exDividendDate: string | number;
  shortRatio: number;
  returnOnAssets: number;
  returnOnEquity: number;
  month1ChangePercent: number;
  month6ChangePercent: number;
  year1ChangePercent: number;
  year5ChangePercent: number;
}
