import { Button, Icon, Toast } from "native-base";
import React, { SFC } from "react";

export interface IRefreshAllButtonDispatchProps {
  handleRefresh: () => void;
}

export const RefreshAllButton: SFC<IRefreshAllButtonDispatchProps> = props => {
  const handleButtonPress = () => {
    Toast.show({
      text: "Refreshing all watchlist and portfolio tickers",
      buttonText: "Dismiss",
      type: "success"
    });
    props.handleRefresh();
  };

  return (
    <Button transparent={true} onPress={handleButtonPress}>
      <Icon name="refresh" />
    </Button>
  );
};
