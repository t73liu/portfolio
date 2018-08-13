import { Body, CardItem, Text } from "native-base";
import React, { SFC } from "react";
import IQuote from "../../stock/models/IQuote";
import { formatCurrency, formatShares } from "../../util/functions";
import IHolding from "../models/IHolding";

export interface IPortfolioItemOwnProps {
  position: IHolding;
}

export interface IPortfolioItemStateProps {
  quote?: IQuote;
}

type IPortfolioItemProps = IPortfolioItemOwnProps & IPortfolioItemStateProps;

export const PortfolioItem: SFC<IPortfolioItemProps> = props => {
  return (
    <CardItem bordered={true}>
      <Body>
        <Text>{props.position.ticker}</Text>
        <Text note={true}>
          Buy Price: {formatCurrency(props.position.buyPrice)}
        </Text>
        <Text note={true}>Shares: {formatShares(props.position.amount)}</Text>
        <Text note={true}>
          {"Current Price: "}
          {props.quote ? formatCurrency(props.quote.latestPrice) : "Unknown"}
        </Text>
      </Body>
    </CardItem>
  );
};
