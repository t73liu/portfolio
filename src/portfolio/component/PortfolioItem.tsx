import { Body, CardItem, Text } from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import { profitLossStyle } from "../../common/models/IProfitLossStyle";
import IQuote from "../../stock/models/IQuote";
import { decimalToPercent, formatCurrency, formatShares } from "../../util/functions";
import IHolding from "../models/IHolding";

export interface IPortfolioItemOwnProps {
  position: IHolding;
}

export interface IPortfolioItemStateProps {
  quote?: IQuote;
}

type IPortfolioItemProps = IPortfolioItemOwnProps &
  IPortfolioItemStateProps &
  NavigationInjectedProps;

export const PortfolioItem: SFC<IPortfolioItemProps> = props => {
  const bookValue = props.position.buyPrice * props.position.amount;

  const handleItemPress = () => {
    props.navigation.push("StockDetail", {
      ticker: props.position.ticker
    });
  };

  const renderFound = () => {
    const quote = props.quote!;
    const marketValue = quote.latestPrice * props.position.amount;
    const pnl = marketValue - bookValue;
    const pnlPercent = pnl / bookValue;
    return (
      <CardItem bordered={true} onPress={handleItemPress}>
        <Body>
          <Text style={pnl < 0 ? profitLossStyle.loss : profitLossStyle.profit}>
            {props.position.ticker}: {formatCurrency(marketValue)}
          </Text>
          <Text note={true}>
            Change: {formatCurrency(pnl)} [{decimalToPercent(pnlPercent)}]
          </Text>
          <Text note={true}>
            Current Price: {formatCurrency(quote.latestPrice)}
          </Text>
          <Text note={true}>
            Buy Price: {formatCurrency(props.position.buyPrice)}
          </Text>
          <Text note={true}>Shares: {formatShares(props.position.amount)}</Text>
        </Body>
      </CardItem>
    );
  };

  const renderNotFound = () => {
    return (
      <CardItem bordered={true} onPress={handleItemPress}>
        <Body>
          <Text>{props.position.ticker} [UNKNOWN]</Text>
          <Text note={true}>
            Buy Price: {formatCurrency(props.position.buyPrice)}
          </Text>
          <Text note={true}>Shares: {formatShares(props.position.amount)}</Text>
        </Body>
      </CardItem>
    );
  };

  if (props.quote) {
    return renderFound();
  }
  return renderNotFound();
};
