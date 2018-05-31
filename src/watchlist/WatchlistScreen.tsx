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
import React, { Component } from "react";
import { connect } from "react-redux";

import { IStoreState } from "../store/types";
import StockDetail from "./StockDetail";

interface IWatchlistProps {
  tickers: string[];
}

class WatchlistScreen extends Component<IWatchlistProps, object> {
  constructor(props: IWatchlistProps) {
    super(props);
  }

  public render() {
    return (
      <Container>
        {/*TODO if watchlist is 100, hide searchbar*/}
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
            {this.props.tickers.map(ticker => (
              <StockDetail key={ticker} ticker={ticker} />
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state: IStoreState): IWatchlistProps {
  return {
    tickers: state.watchlist
  };
}

export default connect(mapStateToProps)(WatchlistScreen);
