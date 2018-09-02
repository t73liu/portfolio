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
  filtered: [],
  isLoading: false,
  errorMsg: null
};

export default function symbolNameReducer(
  state: ISymbolState = initialState,
  action: SymbolNameActions
): ISymbolState {
  switch (action.type) {
    case getType(symbolNameActions.refreshSymbolName.request):
      return R.assoc("isLoading", true, state);
    case getType(symbolNameActions.refreshSymbolName.success):
      return {
        all: formatSymbolNames(action.payload),
        filtered: [],
        isLoading: false,
        errorMsg: null
      };
    case getType(symbolNameActions.refreshSymbolName.failure):
      // TODO replace placeholder error with user-friendly msg
      const error = JSON.stringify(action.payload);
      return {
        ...state,
        isLoading: false,
        errorMsg: error
      };
    case getType(symbolNameActions.searchSymbol):
      return R.assoc(
        "filtered",
        filterMatches(action.payload.toUpperCase(), R.keys(
          state.all
        ) as string[]),
        state
      );
    case getType(symbolNameActions.dismissSymbolDataError):
      return R.assoc("errorMsg", null, state);
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
