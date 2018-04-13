import React, {Component} from 'react'
import {Content, List, ListItem, Text} from 'native-base'

export default class WatchlistScreen extends Component {
    render() {
        const items = ['APPL', 'AMZN', 'NFLX', 'MSFT', 'GOOGL'];
        // Up to 10 types
        // Up to 100 symbols
        // range for chart type has various ranges
        // last is param from news type ranging 1 to 50
        // https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5
        return (
            <Content>
                <List dataArray={items}
                      renderRow={(item) =>
                          <ListItem>
                              <Text>{item}</Text>
                          </ListItem>
                      }>
                </List>
            </Content>
        );
    }
}
