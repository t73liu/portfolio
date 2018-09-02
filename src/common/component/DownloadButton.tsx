import { Button, Icon, Spinner, Toast } from "native-base";
import React, { Component } from "react";

interface IDownloadButtonProps {
  iconType: string;
  isLoading: boolean;
  errorMsg: string | null;
  explanation?: string;
  handlePress: () => void;
  handleToast: () => void;
}

export default class DownloadButton extends Component<
  IDownloadButtonProps,
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
        onPress={this.props.handlePress}
        onLongPress={this.handleLongPress}
      >
        <Icon name={this.props.iconType} />
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
        onClose: this.props.handleToast
      });
    }
  };

  private handleLongPress = () => {
    if (this.props.explanation) {
      Toast.show({
        text: this.props.explanation
      });
    }
  };
}
