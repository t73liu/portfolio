import React, {Component} from 'react'
import {Content, List, ListItem, Text} from 'native-base'

export default class News extends Component {
    render() {
        const items = ['Amazon News', '...'];
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
