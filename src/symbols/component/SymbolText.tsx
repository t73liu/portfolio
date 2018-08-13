import { Body, Text } from "native-base";
import React, { SFC } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { formatCurrency } from "../../util/functions";
import { ISymbolItemProps } from "./SymbolItem";

interface ITickerStyle {
  readonly profit: TextStyle;
  readonly loss: TextStyle;
}

const styles = StyleSheet.create<ITickerStyle>({
  profit: {
    color: "green"
  },
  loss: {
    color: "red"
  }
});

export const SymbolText: SFC<ISymbolItemProps> = props => {
  const renderNotFound = () => {
    return (
      <Body>
        <Text>{props.ticker}</Text>
        <Text note={true}>{props.name}</Text>
      </Body>
    );
  };

  const renderFound = () => {
    return (
      <Body>
        <Text style={props.quote!.change < 0 ? styles.loss : styles.profit}>
          {props.ticker}: {formatCurrency(props.quote!.latestPrice)}
        </Text>
        <Text note={true}>Change: {formatCurrency(props.quote!.change)}</Text>
        <Text note={true}>{props.name}</Text>
      </Body>
    );
  };

  if (typeof props.quote === "undefined") {
    return renderNotFound();
  } else {
    return renderFound();
  }
};
