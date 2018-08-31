import { Body, Text } from "native-base";
import React, { SFC } from "react";
import { profitLossStyle } from "../../common/models/IProfitLossStyle";
import { decimalToPercent, formatCurrency } from "../../util/functions";
import { ISymbolItemProps } from "./SymbolItem";

export const SymbolText: SFC<ISymbolItemProps> = props => {
  const renderFound = () => {
    const quote = props.quote!;
    return (
      <Body>
        <Text
          style={
            quote.change < 0 ? profitLossStyle.loss : profitLossStyle.profit
          }
        >
          {props.ticker}: {formatCurrency(quote.latestPrice)}
        </Text>
        <Text note={true}>
          Change: {formatCurrency(quote.change)} [
          {decimalToPercent(quote.changePercent)}]
        </Text>
        <Text note={true}>{props.name}</Text>
      </Body>
    );
  };

  const renderNotFound = () => {
    return (
      <Body>
        <Text>{props.ticker}</Text>
        <Text note={true}>{props.name}</Text>
      </Body>
    );
  };

  if (props.quote) {
    return renderFound();
  }
  return renderNotFound();
};
