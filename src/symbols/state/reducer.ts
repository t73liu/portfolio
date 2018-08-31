import R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import data from "../../../assets/data/symbols.json";
import { arrayToIDictionary } from "../../util/functions";
import ISymbolName from "../models/ISymbolName";
import ISymbolState from "../models/ISymbolState";
import * as symbolNameActions from "./actions";

export type SymbolNameActions = ActionType<typeof symbolNameActions>;

const formatSymbolNames = (symbols: ISymbolName[]) =>
  arrayToIDictionary<ISymbolName>(symbols, el => el.symbol);

const initialState: ISymbolState = {
  all: formatSymbolNames(data),
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
      return {
        all: formatSymbolNames(action.payload),
        filtered: []
      };
    case getType(symbolNameActions.refreshSymbolName.failure):
      // TODO display failure notification
      return state;
    case getType(symbolNameActions.searchSymbol):
      return R.assoc(
        "filtered",
        filterMatches(action.payload.toUpperCase(), R.keys(
          state.all
        ) as string[]),
        state
      );
    default:
      return state;
  }
}

function filterMatches(query: string, tickers: string[]): string[] {
  if (query === "") {
    return [];
  }
  return R.take(
    20,
    R.sort(
      (a, b) => a.length - b.length,
      R.filter(symbol => symbol.includes(query), tickers)
    )
  );
}
