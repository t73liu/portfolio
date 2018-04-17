import React, {Component} from 'react';
import {Body, ListItem, Text} from 'native-base';

interface StockDetailProps {
    ticker: string
}

interface StockDetailState {
    pressed: boolean
}

const initialState = {pressed: false};

export default class StockDetail extends Component<StockDetailProps, StockDetailState> {
    readonly state: StockDetailState = initialState;

    constructor(props: StockDetailProps) {
        super(props);
    }

    render() {
        return (
            <ListItem>
                <Body>
                <Text>{this.props.ticker}</Text>
                </Body>
            </ListItem>
        );
    }
}
