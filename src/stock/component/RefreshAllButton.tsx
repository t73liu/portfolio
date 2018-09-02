import { Button, Icon, Spinner, Toast } from "native-base";
import React, { Component } from "react";

export interface IRefreshAllButtonStateProps {
  isLoading: boolean;
  errorMsg: string | null;
}

export interface IRefreshAllButtonDispatchProps {
  handleRefresh: () => void;
  dismissError: () => void;
}

type IRefreshAllButtonProps = IRefreshAllButtonStateProps &
  IRefreshAllButtonDispatchProps;

export default class RefreshAllButton extends Component<
  IRefreshAllButtonProps,
  object
> {
  public componentDidUpdate() {
    this.displayErrorMsg();
  }

  public render() {
    if (this.props.isLoading) {
      return (
        <Button>
          <Spinner />
        </Button>
      );
    }
    return (
      <Button
        transparent={true}
        onPress={this.handleButtonPress}
        onLongPress={this.handleLongPress}
      >
        <Icon name="refresh" />
      </Button>
    );
  }

  private displayErrorMsg = () => {
    if (this.props.errorMsg) {
      Toast.show({
        text: this.props.errorMsg,
        buttonText: "Dismiss",
        type: "danger",
        duration: 10000,
        onClose: this.props.dismissError
      });
    }
  };

  private handleButtonPress = () => {
    this.props.handleRefresh();
  };

  private handleLongPress = () => {
    Toast.show({
      text: "Refreshing all watchlist and portfolio tickers"
    });
  };
}
