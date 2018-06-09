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
import StockDetailContainer from "../container/StockDetailContainer";

export interface IWatchlistProps {
  tickers: string[];
}

export const WatchlistScreen: SFC<IWatchlistProps> = props => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Watchlist</Title>
        </Body>
        <Right>
          <Button transparent={true}>
            <Icon name="add" />
          </Button>
          <Button transparent={true}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        <List>
          {props.tickers.map(ticker => (
            <StockDetailContainer key={ticker} ticker={ticker} />
          ))}
        </List>
      </Content>
    </Container>
  );
};
