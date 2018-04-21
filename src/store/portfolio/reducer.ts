import {List} from "immutable";

import {Holding} from "../types";
import {ActionTypes} from "../actionTypes";

export function PortfolioReducer(state: List<Holding> = List(), action: ActionTypes): List<Holding> {
    switch (action.type) {
        default:
            return state;
    }
}
