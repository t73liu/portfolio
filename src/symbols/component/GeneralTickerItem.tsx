import { ListItem, Right } from "native-base";
import React, { ReactChild, SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import { SymbolButton } from "./SymbolButton";

export interface IGeneralTickerItemOwnProps {
  ticker: string;
  body: ReactChild;
}

export interface IGeneralTickerItemStateProps {
  isWatched: boolean;
  isHeld: boolean;
}

export interface IGeneralTickerItemDispatchProps {
  addTicker: (ticker: string) => any;
  deleteTicker: (ticker: string) => any;
}

type IGeneralTickerItemProps = IGeneralTickerItemOwnProps &
  IGeneralTickerItemStateProps &
  IGeneralTickerItemDispatchProps &
  NavigationInjectedProps;

export const GeneralTickerItem: SFC<IGeneralTickerItemProps> = props => {
  const handleItemPress = () => {
    props.navigation.push("StockDetail", {
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
    props.navigation.push("PositionEdit", {
      ticker: props.ticker
    });
  };

  return (
    <ListItem onPress={handleItemPress}>
      {props.body}
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
