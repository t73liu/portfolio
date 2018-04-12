import React, {Component} from 'react'
import {Content, List, ListItem, Text} from 'native-base'

export default class NewsScreen extends Component {
    render() {
        const items = ['Amazon Price Increases', '...'];
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
