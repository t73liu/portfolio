import React, {Component} from 'react';
import {Body, Button, Icon, ListItem, Right, Text} from 'native-base';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {Quote, StoreState} from "../store/types";
import {removeWatchlistTicker} from "../store/watchlist/actions";

interface StockDetailProps {
    ticker: string
    quote: Quote
    dispatch: Dispatch<StoreState>
}

interface StockDetailState {
    pressed: boolean
}

class StockDetail extends Component<StockDetailProps, StockDetailState> {
    readonly state: StockDetailState = {pressed: false};

    constructor(props: StockDetailProps) {
        super(props);
        this.changeView = this.changeView.bind(this);
        this.deleteTicker = this.deleteTicker.bind(this);
    }

    changeView() {
        this.setState({
            pressed: !this.state.pressed
        });
    }

    deleteTicker() {
        this.props.dispatch(removeWatchlistTicker(this.props.ticker));
    }

    render() {
        return (
            <ListItem onPress={this.changeView}>
                {this.state.pressed ?
                    (<Body>
                    <Text>
                        Test
                    </Text>
                    </Body>) :
                    (<Body>
                    <Text>{this.props.ticker}</Text>
                    <Text note>{this.props.quote.ytdChange}</Text>
                    </Body>)
                }
                <Right>
                    <Button dark transparent onPress={this.deleteTicker}>
                        <Icon name="trash"/>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

function mapStateToProps(state: StoreState, ownProps: StockDetailProps): StockDetailProps {
    return {
        quote: state.marketData.symbolData.get(ownProps.ticker)!.quote,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>, ownProps: StockDetailProps): StockDetailProps {
    return {
        dispatch,
        ...ownProps
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
