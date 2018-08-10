import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/symbols.json";
import ISymbolName from "../models/ISymbolName";
import * as symbolNameActions from "./actions";

export type SymbolNameActions = ActionType<typeof symbolNameActions>;

interface ISymbolNames {
  all: ISymbolName[];
  filtered: ISymbolName[];
}

const initialState: ISymbolNames = {
  all: data as ISymbolName[],
  filtered: []
};

export default function symbolNameReducer(
  state: ISymbolNames = initialState,
  action: SymbolNameActions
): ISymbolNames {
  switch (action.type) {
    case getType(symbolNameActions.refreshSymbolName.request):
      return state;
    case getType(symbolNameActions.refreshSymbolName.success):
      return state;
    case getType(symbolNameActions.refreshSymbolName.failure):
      return state;
    case getType(symbolNameActions.searchSymbol):
      if (typeof action.payload === "undefined" || action.payload === "") {
        return {
          ...state,
          filtered: []
        };
      } else {
        return {
          ...state,
          filtered: state.all
            .filter(name => name.symbol.includes(action.payload))
            .slice(0, 20)
        };
      }
    default:
      return state;
  }
}
