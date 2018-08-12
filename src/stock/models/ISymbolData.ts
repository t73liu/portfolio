import INewsItem from "../../news/models/INewsItem";
import IQuote from "./IQuote";

export default interface ISymbolData {
  quote: IQuote;
  news: INewsItem[];
}
