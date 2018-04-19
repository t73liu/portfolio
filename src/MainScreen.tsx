import React, {Component} from 'react'
import {Body, Container, Footer, FooterTab, Header, Tab, Tabs, Title} from 'native-base'

import NewsScreen from './news/NewsScreen';
import WatchlistScreen from './watchlist/WatchlistScreen';
import PortfolioScreen from './portfolio/PortfolioScreen';
import RefreshButton from './common/RefreshButton';

export default class MainScreen extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Body style={{alignItems: "center"}}>
                    <Title>Portfolio Buddy</Title>
                    </Body>
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
                <Footer>
                    <FooterTab>
                        <RefreshButton/>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
