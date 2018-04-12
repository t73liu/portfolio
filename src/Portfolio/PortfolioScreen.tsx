import React, {Component} from 'react'
import {Body, Card, CardItem, Content, Text} from 'native-base'

export default class PortfolioScreen extends Component {
    render() {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                        <Text>
                            Portfolio Here
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}
