import {SymbolName} from "../types";
import {ActionTypes} from "../actionTypes";

export function SupportedSymbolReducer(state: SymbolName[] = [], action: ActionTypes): SymbolName[] {
    switch (action.type) {
        default:
            return state;
    }
}
