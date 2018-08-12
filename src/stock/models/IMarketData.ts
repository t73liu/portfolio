import IDictionary from "../../common/types";
import ISymbolData from "./ISymbolData";

export default interface IMarketData {
  symbolData: IDictionary<ISymbolData>;
  isRefreshing: boolean;
  lastUpdated: Date;
}
