import { ActionTypes } from "../actionTypes";
import { ISymbolName } from "../types";

export function SupportedSymbolReducer(
  state: ISymbolName[] = [],
  action: ActionTypes
): ISymbolName[] {
  switch (action.type) {
    default:
      return state;
  }
}
