import { Body, Container, Header, Tab, Tabs, Title } from "native-base";
import React, { Component } from "react";

import NewsScreenContainer from "./news/container/NewsScreenContainer";
import PortfolioScreen from "./portfolio/component/PortfolioScreen";
import WatchlistScreenContainer from "./watchlist/container/WatchlistScreenContainer";

export default class MainScreen extends Component {
  public render() {
    return (
      <Container>
        <Header hasTabs={true}>
          <Body style={{ alignItems: "center" }}>
            <Title>Portfolio Buddy</Title>
          </Body>
        </Header>
        <Tabs initialPage={0}>
          <Tab heading="Watchlist">
            <WatchlistScreenContainer />
          </Tab>
          <Tab heading="News">
            <NewsScreenContainer />
          </Tab>
          <Tab heading="Portfolio">
            <PortfolioScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
