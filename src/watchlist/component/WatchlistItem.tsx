import { Body, Button, Icon, ListItem, Right, Text } from "native-base";
import React, { SFC } from "react";

import { NavigationInjectedProps } from "react-navigation";
import { IQuote } from "../../types";

export interface IStockDetailOwnProps {
  ticker: string;
}

interface IStockDetailStateProps {
  quote?: IQuote;
}

interface IStockDetailDispatchProps {
  deleteTicker: (ticker: string) => any;
}

type IStockDetailProps = IStockDetailOwnProps &
  IStockDetailStateProps &
  IStockDetailDispatchProps &
  NavigationInjectedProps;

export const WatchlistItem: SFC<IStockDetailProps> = props => {
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
        <Text>{props.ticker}</Text>
        <Text note={true}>
          {typeof props.quote === "undefined"
            ? "Please Refresh"
            : props.quote!.latestPrice}
        </Text>
      </Body>
      <Right>
        <Button danger={true} transparent={true} onPress={handleButtonPress}>
          <Icon name="trash" />
        </Button>
      </Right>
    </ListItem>
  );
};
