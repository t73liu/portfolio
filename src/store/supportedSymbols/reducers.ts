import {List} from "immutable";

import {SymbolName} from "../types";
import {ActionTypes} from "../actionTypes";

export function SupportedSymbolReducer(state: List<SymbolName> = List(), action: ActionTypes): List<SymbolName> {
    switch (action.type) {
        default:
            return state;
    }
}
