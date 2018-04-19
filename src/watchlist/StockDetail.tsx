import React, {Component} from 'react';
import {Body, Icon, ListItem, Right, Text} from 'native-base';

interface StockDetailProps {
    ticker: string
}

interface StockDetailState {
    pressed: boolean
}

export default class StockDetail extends Component<StockDetailProps, StockDetailState> {
    readonly state: StockDetailState = {pressed: false};

    constructor(props: StockDetailProps) {
        super(props);
    }

    render() {
        return (
            <ListItem>
                <Body>
                <Text>{this.props.ticker}</Text>
                </Body>
                <Right>
                    <Icon name="trash"/>
                </Right>
            </ListItem>
        );
    }
}
