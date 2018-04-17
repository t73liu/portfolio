import React, {Component} from 'react'
import {Content, List} from 'native-base'
import {connect} from 'react-redux';

import StockDetail from './StockDetail';
import {StoreState} from '../store/types';

interface WatchlistProps {
    tickers: string[]
}

class WatchlistScreen extends Component<WatchlistProps, object> {
    constructor(props: WatchlistProps) {
        super(props);
    }

    render() {
        return (
            <Content>
                <List dataArray={this.props.tickers}
                      renderRow={(ticker) =>
                          <StockDetail key={ticker} ticker={ticker}/>
                      }>
                </List>
            </Content>
        );
    }
}

function mapStateToProps(state: StoreState): WatchlistProps {
    return ({
        tickers: state.watchlist
    });
}

export default connect(mapStateToProps)(WatchlistScreen);
