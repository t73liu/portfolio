import R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/symbols.json";
import ISymbolName from "../models/ISymbolName";
import ISymbolState from "../models/ISymbolState";
import * as symbolNameActions from "./actions";

export type SymbolNameActions = ActionType<typeof symbolNameActions>;

const initialState: ISymbolState = {
  all: data as ISymbolName[],
  filtered: []
};

export default function symbolNameReducer(
  state: ISymbolState = initialState,
  action: SymbolNameActions
): ISymbolState {
  switch (action.type) {
    case getType(symbolNameActions.refreshSymbolName.request):
      return state;
    case getType(symbolNameActions.refreshSymbolName.success):
      return state;
    case getType(symbolNameActions.refreshSymbolName.failure):
      return state;
    case getType(symbolNameActions.searchSymbol):
      if (typeof action.payload === "undefined" || action.payload === "") {
        return R.assoc("filtered", [], state);
      } else {
        return R.assoc(
          "filtered",
          R.take(
            20,
            R.sort(
              (a, b) => a.symbol.length - b.symbol.length,
              R.filter(name => name.symbol.includes(action.payload), state.all)
            )
          ),
          state
        );
      }
    default:
      return state;
  }
}
