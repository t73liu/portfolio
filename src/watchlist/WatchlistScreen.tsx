import React, {Component} from 'react'
import {Button, Container, Content, Header, Icon, Input, Item, List as ListComponent, Text} from 'native-base'
import {connect} from 'react-redux';
import {List} from "immutable";

import StockDetail from './StockDetail';
import {StoreState} from '../store/types';

interface WatchlistProps {
    tickers: List<string>
}

class WatchlistScreen extends Component<WatchlistProps, object> {
    constructor(props: WatchlistProps) {
        super(props);
    }

    render() {
        return (
            <Container>
                {/*TODO if watchlist is 100, hide searchbar*/}
                <Header searchBar>
                    <Item>
                        <Icon name="search"/>
                        <Input placeholder="Search Ticker"/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <ListComponent dataArray={this.props.tickers.toJS()}
                                   renderRow={(ticker) =>
                              <StockDetail key={ticker} ticker={ticker}/>
                          }>
                    </ListComponent>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state: StoreState): WatchlistProps {
    return ({
        tickers: state.watchlist
    });
}

export default connect(mapStateToProps)(WatchlistScreen);
