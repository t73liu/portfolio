import { ActionTypes } from "../actionTypes";
import { IHolding } from "../types";

export function PortfolioReducer(
  state: IHolding[] = [],
  action: ActionTypes
): IHolding[] {
  switch (action.type) {
    default:
      return state;
  }
}
