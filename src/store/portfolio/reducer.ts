import {Holding} from "../types";
import {ActionTypes} from "../actionTypes";

export function PortfolioReducer(state: Holding[] = [], action: ActionTypes): Holding[] {
    switch (action.type) {
        default:
            return state;
    }
}
