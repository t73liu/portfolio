import { Body, Button, Spinner, Text } from "native-base";
import React, { SFC } from "react";

export interface IRefreshButtonProps {
  isRefreshing: boolean;
  lastUpdated: string;
}

export const RefreshButton: SFC<IRefreshButtonProps> = props => {
  const time = props.lastUpdated;
  return props.isRefreshing ? (
    <Body>
      <Spinner />
    </Body>
  ) : (
    <Button>
      <Text>Refresh Data</Text>
      <Text note={true}>{time}</Text>
    </Button>
  );
};
