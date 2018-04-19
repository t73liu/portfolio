import React, {Component} from 'react';
import {Body, Button, Icon, ListItem, Right, Text} from 'native-base';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {StoreState} from "../store/types";

interface StockDetailProps {
    ticker: string
}

interface StockDetailState {
    pressed: boolean
}

class StockDetail extends Component<StockDetailProps, StockDetailState> {
    readonly state: StockDetailState = {pressed: false};

    constructor(props: StockDetailProps) {
        super(props);
    }

    render() {
        return (
            <ListItem>
                <Body>
                <Text>{this.props.ticker}</Text>
                <Text note>Placeholder</Text>
                </Body>
                <Right>
                    <Button danger transparent>
                        <Icon name="trash"/>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

function mapStateToProps(state: StoreState, ownProps: StockDetailProps): StockDetailProps {
    return ownProps;
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: StockDetailProps): StockDetailProps {
    return ownProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
