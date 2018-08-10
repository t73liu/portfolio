import { Body, ListItem, Right, Text } from "native-base";
import React, { SFC } from "react";

import { NavigationInjectedProps } from "react-navigation";
import IQuote from "../../market/models/IQuote";
import { SymbolButton } from "./SymbolButton";
import { SymbolText } from "./SymbolText";

export interface ISymbolItemOwnProps {
  ticker: string;
}

export interface ISymbolItemStateProps {
  quote?: IQuote;
  name: string;
  isWatched: boolean;
  isHeld: boolean;
}

export interface ISymbolItemDispatchProps {
  addTicker: (ticker: string) => any;
  deleteTicker: (ticker: string) => any;
}

export type ISymbolItemProps = ISymbolItemOwnProps &
  ISymbolItemStateProps &
  ISymbolItemDispatchProps &
  NavigationInjectedProps;

export const SymbolItem: SFC<ISymbolItemProps> = props => {
  const handleItemPress = () => {
    props.navigation.navigate("StockDetail", {
      ticker: props.ticker
    });
  };

  const handleWatchlistButtonPress = () => {
    if (props.isWatched) {
      props.deleteTicker(props.ticker);
    } else {
      props.addTicker(props.ticker);
    }
  };

  const handlePortfolioButtonPress = () => {
    props.navigation.navigate("PositionEdit", {
      ticker: props.ticker
    });
  };

  return (
    <ListItem onPress={handleItemPress}>
      <Body>
      <SymbolText {...props} />
        <Text note={true}>{props.name}</Text>
      </Body>
      <Right>
        <SymbolButton
          nestedIcon="eye"
          isActive={props.isWatched}
          handlePress={handleWatchlistButtonPress}
        />
      </Right>
      <Right>
        <SymbolButton
          nestedIcon="cash"
          isActive={props.isHeld}
          handlePress={handlePortfolioButtonPress}
        />
      </Right>
    </ListItem>
  );
};
