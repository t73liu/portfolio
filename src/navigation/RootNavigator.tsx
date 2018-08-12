import { Button, Footer, FooterTab, Text } from "native-base";
import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import NewsScreenContainer from "../news/container/NewsScreenContainer";
import PortfolioNavigator from "./PortfolioNavigator";
import WatchlistNavigator from "./WatchlistNavigator";

export default createBottomTabNavigator(
  {
    Watchlist: WatchlistNavigator,
    News: NewsScreenContainer,
    Portfolio: PortfolioNavigator
  },
  {
    swipeEnabled: false,
    tabBarComponent: props => {
      const onPressWatchlist = () => {
        props.navigation.navigate("Watchlist");
      };
      const onPressNews = () => {
        props.navigation.navigate("News");
      };
      const onPressPortfolio = () => {
        props.navigation.navigate("Portfolio");
      };
      return (
        <Footer>
          <FooterTab>
            <Button
              active={props.navigation.state.index === 0}
              onPress={onPressWatchlist}
            >
              <Text>Watchlist</Text>
            </Button>
            <Button
              active={props.navigation.state.index === 1}
              onPress={onPressNews}
            >
              <Text>News</Text>
            </Button>
            <Button
              active={props.navigation.state.index === 2}
              onPress={onPressPortfolio}
            >
              <Text>Portfolio</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);
