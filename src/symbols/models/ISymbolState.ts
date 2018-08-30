import IDictionary from "../../common/models/IDictionary";
import ISymbolName from "./ISymbolName";

export default interface ISymbolState {
  all: IDictionary<ISymbolName>;
  filtered: string[];
}
