import * as R from "rambda";
import { ActionType, getType } from "typesafe-actions";
import uuid from "uuid/v1";
import data from "../../../assets/data/portfolio.json";
import IHolding from "../models/IHolding";
import * as portfolioActions from "./actions";

export type PortfolioActions = ActionType<typeof portfolioActions>;

const placeholder = data as IHolding[];

export default function portfolioReducer(
  state: IHolding[] = placeholder,
  action: PortfolioActions
): IHolding[] {
  switch (action.type) {
    case getType(portfolioActions.addPosition):
      const newPosition = {
        id: uuid(),
        ticker: action.payload,
        amount: 0,
        buyPrice: 0,
        buyDate: new Date()
      };
      return R.prepend(newPosition, state);
    case getType(portfolioActions.editPosition):
      const id = action.payload.id;
      const index = R.findIndex(position => position.id === id, state);
      return index === -1
        ? R.append(action.payload, state)
        : R.update(index, action.payload, state);
    case getType(portfolioActions.deletePosition):
      return R.filter(position => position.id !== action.payload, state);
    default:
      return state;
  }
}
