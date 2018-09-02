import IDictionary from "../../common/models/IDictionary";
import ISymbolData from "./ISymbolData";

export default interface IMarketData {
  symbolData: IDictionary<ISymbolData>;
  isLoading: boolean;
  lastUpdated: Date;
  errorMsg: string | null;
}
