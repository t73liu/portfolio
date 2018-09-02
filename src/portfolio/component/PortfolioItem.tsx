import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import IQuote from "../../stock/models/IQuote";
import GeneralTickerItemContainer from "../../symbols/container/GeneralTickerItemContainer";
import IHolding from "../models/IHolding";
import { PortfolioText } from "./PortfolioText";

export interface IPortfolioItemOwnProps {
  ticker: string;
  position: IHolding;
}

export interface IPortfolioItemStateProps {
  quote?: IQuote;
}

export type IPortfolioItemProps = IPortfolioItemOwnProps &
  IPortfolioItemStateProps &
  NavigationInjectedProps;

export const PortfolioItem: SFC<IPortfolioItemProps> = props => {
  return (
    <GeneralTickerItemContainer
      ticker={props.ticker}
      body={<PortfolioText {...props} />}
      navigation={props.navigation}
    />
  );
};
