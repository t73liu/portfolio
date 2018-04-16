import React, {Component} from 'react'
import {Content, List} from 'native-base'
import StockDetail from "./StockDetail";

export default class WatchlistScreen extends Component {
    render() {
        const tickers = ['APPL', 'AMZN', 'NFLX', 'MSFT', 'GOOGL'];
        return (
            <Content>
                <List dataArray={tickers}
                      renderRow={(ticker) =>
                          <StockDetail ticker={ticker}/>
                      }>
                </List>
            </Content>
        );
    }
}
