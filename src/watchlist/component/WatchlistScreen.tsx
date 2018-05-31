import {
  Button,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  List,
  Text
} from "native-base";
import React, { SFC } from "react";
import StockDetailContainer from "../container/StockDetailContainer";

export interface IWatchlistProps {
  tickers: string[];
}

export const WatchlistScreen: SFC<IWatchlistProps> = props => {
  return (
    <Container>
      <Header searchBar={true}>
        <Item>
          <Icon name="search" />
          <Input placeholder="Search Ticker" />
        </Item>
        <Button transparent={true}>
          <Text>Search</Text>
        </Button>
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
