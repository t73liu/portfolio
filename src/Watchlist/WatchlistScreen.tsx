import React, {Component} from 'react'
import {Content, List, ListItem, Text} from 'native-base'

export default class WatchlistScreen extends Component {
    render() {
        const items = ['APPL', 'AMZN', 'NFLX', 'MSFT', 'GOOGL'];
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
