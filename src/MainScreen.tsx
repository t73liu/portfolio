import React, {Component} from 'react'
import {Body, Container, Header, Left, Right, Tab, Tabs, Title} from 'native-base'
import News from "./News";
import Portfolio from "./Portfolio";
import Watchlist from "./Watchlist";

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
                <Tabs initialPage={0}>
                    <Tab heading="Watchlist">
                        <Watchlist/>
                    </Tab>
                    <Tab heading="Portfolio">
                        <Portfolio/>
                    </Tab>
                    <Tab heading="News">
                        <News/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
