import { Body, Text } from "native-base";
import React, { SFC } from "react";
import { profitLossStyle } from "../../common/models/IProfitLossStyle";
import {
  decimalToPercent,
  formatCurrency,
  formatShares
} from "../../util/functions";
import { IPortfolioItemProps } from "./PortfolioItem";

export const PortfolioText: SFC<IPortfolioItemProps> = props => {
  const bookValue = props.position.buyPrice * props.position.amount;

  const renderFound = () => {
    const quote = props.quote!;
    const marketValue = quote.latestPrice * props.position.amount;
    const pnl = marketValue - bookValue;
    const pnlPercent = bookValue === 0 ? 0 : pnl / bookValue;
    return (
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
    );
  };

  const renderNotFound = () => {
    return (
      <Body>
        <Text>{props.position.ticker} [UNKNOWN]</Text>
        <Text note={true}>
          Buy Price: {formatCurrency(props.position.buyPrice)}
        </Text>
        <Text note={true}>Shares: {formatShares(props.position.amount)}</Text>
      </Body>
    );
  };

  if (props.quote) {
    return renderFound();
  }
  return renderNotFound();
};
