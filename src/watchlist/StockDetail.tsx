import * as React from "react";
import {Component} from "react";
import {Body, ListItem, Text} from "native-base";

interface StockDetailProps {
    ticker: string
}

export default class StockDetail extends Component<StockDetailProps, object> {
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
