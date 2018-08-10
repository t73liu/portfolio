import { Text } from "native-base";
import React, { SFC } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { IStockDetailProps } from "./SymbolItem";

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

export const SymbolText: SFC<IStockDetailProps> = props => {
  if (typeof props.quote === "undefined") {
    return <Text>{props.ticker}</Text>;
  } else if (props.quote.change < 0) {
    return (
      <Text style={styles.loss}>
        {props.ticker}: {props.quote.latestPrice} [{props.quote.change}]
      </Text>
    );
  } else {
    return (
      <Text style={styles.profit}>
        {props.ticker}: {props.quote.latestPrice} [{props.quote.change}]
      </Text>
    );
  }
};
