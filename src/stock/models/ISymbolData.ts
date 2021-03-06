import INewsItem from "../../news/models/INewsItem";
import IQuote from "./IQuote";
import ISymbolChart from "./ISymbolChart";
import ISymbolFinancials from "./ISymbolFinancials";
import ISymbolKeyStats from "./ISymbolKeyStats";

export default interface ISymbolData {
  quote: IQuote;
  news: INewsItem[];
  stats: ISymbolKeyStats;
  peers: string[];
  financials: ISymbolFinancials;
  chart: ISymbolChart[];
}
