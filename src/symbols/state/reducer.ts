import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/symbols.json";
import ISymbolName from "../models/ISymbolName";
import { refreshSymbolName } from "./actions";

export type RefreshSymbolNameActions = ActionType<typeof refreshSymbolName>;

const initialState: ISymbolName[] = data as ISymbolName[];

export default function symbolNameReducer(
  state: ISymbolName[] = initialState,
  action: RefreshSymbolNameActions
): ISymbolName[] {
  switch (action.type) {
    case getType(refreshSymbolName.request):
      return state;
    case getType(refreshSymbolName.success):
      return state;
    case getType(refreshSymbolName.failure):
      return state;
    default:
      return state;
  }
}
