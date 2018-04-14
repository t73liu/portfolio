import React, {Component} from 'react'
import {Body, Container, Header, Left, Right, Tab, Tabs, Title} from 'native-base'

import NewsScreen from "./news/NewsScreen";
import WatchlistScreen from "./watchlist/WatchlistScreen";
import PortfolioScreen from "./portfolio/PortfolioScreen";

export default class MainScreen extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left/>
                    <Body>
                    <Title>Trading Buddy</Title>
                    </Body>
                    <Right/>
                </Header>
                <Tabs initialPage={0} locked={true}>
                    <Tab heading="Watchlist">
                        <WatchlistScreen/>
                    </Tab>
                    <Tab heading="News">
                        <NewsScreen/>
                    </Tab>
                    <Tab heading="Portfolio">
                        <PortfolioScreen/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
