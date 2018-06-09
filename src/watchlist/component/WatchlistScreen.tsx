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
import WatchlistItemContainer from "../container/WatchlistItemContainer";

export interface IWatchlistProps {
  tickers: string[];
}

const test = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i"
];

export const WatchlistScreen: SFC<
  IWatchlistProps & NavigationInjectedProps
> = props => {
  const onPressAdd = () => {
    props.navigation.navigate("WatchlistAdd");
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
          <Title>Watchlist!</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressAdd}>
            <Icon name="add" />
          </Button>
          <Button transparent={true} onPress={onPressRefresh}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        <List>
          {test.map(ticker => (
            <WatchlistItemContainer
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
