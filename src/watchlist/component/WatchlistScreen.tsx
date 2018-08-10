import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  Right,
  Title
} from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import SymbolItemContainer from "../../symbols/container/SymbolItemContainer";

export interface IWatchlistProps {
  tickers: string[];
}

export const WatchlistScreen: SFC<
  IWatchlistProps & NavigationInjectedProps
> = props => {
  const onPressAdd = () => {
    props.navigation.navigate("SymbolLookup");
  };
  const onPressRefresh = () => {
    // TODO implement refresh functionality
    console.log("SHOULD REFRESH DATA");
  };
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Watchlist</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressAdd}>
            <Icon name="search" />
          </Button>
          <Button transparent={true} onPress={onPressRefresh}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        <List>
          {props.tickers.map(ticker => (
            <SymbolItemContainer
              key={ticker}
              ticker={ticker}
              navigation={props.navigation}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
};
