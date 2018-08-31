import { ActionType, getType } from "typesafe-actions";
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
    // TODO implement add/delete/edit functionality
    case getType(portfolioActions.addPosition):
      return state;
    case getType(portfolioActions.editPosition):
      return state;
    case getType(portfolioActions.deletePosition):
      return state;
    default:
      return state;
  }
}
