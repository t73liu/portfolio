import { Body, Button, Icon, ListItem, Right, Text } from "native-base";
import React, { SFC } from "react";

import { NavigationInjectedProps } from "react-navigation";
import IQuote from "../../market/models/IQuote";
import { TickerText } from "./TickerText";

export interface IStockDetailOwnProps {
  ticker: string;
}

export interface IStockDetailStateProps {
  quote?: IQuote;
  name: string;
}

export interface IStockDetailDispatchProps {
  deleteTicker: (ticker: string) => any;
}

export type IStockDetailProps = IStockDetailOwnProps &
  IStockDetailStateProps &
  IStockDetailDispatchProps &
  NavigationInjectedProps;

export const SymbolItem: SFC<IStockDetailProps> = props => {
  const handleButtonPress = () => {
    props.deleteTicker(props.ticker);
  };

  const handleItemPress = () => {
    props.navigation.navigate("StockDetail", {
      ticker: props.ticker
    });
  };

  return (
    <ListItem onPress={handleItemPress}>
      <Body>
        <TickerText {...props} />
        <Text note={true}>{props.name}</Text>
      </Body>
      <Right>
        <Button danger={true} transparent={true} onPress={handleButtonPress}>
          <Icon name="eye" />
        </Button>
      </Right>
      <Right>
        <Button danger={true} transparent={true} onPress={handleButtonPress}>
          <Icon name="cash" />
        </Button>
      </Right>
    </ListItem>
  );
};
