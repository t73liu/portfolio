import {
  Body,
  Container,
  Footer,
  FooterTab,
  Header,
  Tab,
  Tabs,
  Title
} from "native-base";
import React, { Component } from "react";

import RefreshButton from "./common/RefreshButton";
import NewsScreen from "./news/NewsScreen";
import PortfolioScreen from "./portfolio/PortfolioScreen";
import WatchlistScreen from "./watchlist/WatchlistScreen";

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
            <WatchlistScreen />
          </Tab>
          <Tab heading="News">
            <NewsScreen />
          </Tab>
          <Tab heading="Portfolio">
            <PortfolioScreen />
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <RefreshButton />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
