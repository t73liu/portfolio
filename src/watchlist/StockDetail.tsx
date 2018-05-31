import { Body, Button, Icon, ListItem, Right, Text } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IQuote, IStoreState } from "../store/types";
import { removeWatchlistTicker } from "../store/watchlist/actions";

interface IStockDetailProps {
  ticker: string;
  quote?: IQuote;
  dispatch?: Dispatch<IStoreState>;
}

interface IStockDetailState {
  pressed: boolean;
}

class StockDetail extends Component<IStockDetailProps, IStockDetailState> {
  public readonly state: IStockDetailState = { pressed: false };

  constructor(props: IStockDetailProps) {
    super(props);
    this.changeView = this.changeView.bind(this);
    this.deleteTicker = this.deleteTicker.bind(this);
  }

  public changeView() {
    this.setState({
      pressed: !this.state.pressed
    });
  }

  public deleteTicker() {
    this.props.dispatch!(removeWatchlistTicker(this.props.ticker));
  }

  public render() {
    return (
      <ListItem onPress={this.changeView}>
        {this.state.pressed ? (
          <Body>
            <Text>Test</Text>
          </Body>
        ) : (
          <Body>
            <Text>{this.props.ticker}</Text>
            <Text note={true}>
              {typeof this.props.quote === "undefined"
                ? "Please Refresh"
                : this.props.quote!.ytdChange}
            </Text>
          </Body>
        )}
        <Right>
          <Button dark={true} transparent={true} onPress={this.deleteTicker}>
            <Icon name="trash" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

function mapStateToProps(
  state: IStoreState,
  ownProps: IStockDetailProps
): IStockDetailProps {
  return !state.marketData.symbolData.has(ownProps.ticker)
    ? ownProps
    : {
        quote: state.marketData.symbolData.get(ownProps.ticker)!.quote,
        ...ownProps
      };
}

function mapDispatchToProps(
  dispatch: Dispatch<IStoreState>,
  ownProps: IStockDetailProps
): IStockDetailProps {
  return {
    dispatch,
    ...ownProps
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
