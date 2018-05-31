import { Body, Button, Spinner, Text } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";

import { IStoreState } from "../store/types";

interface IRefreshButtonProps {
  isRefreshing: boolean;
  lastUpdated: string;
}

class RefreshButton extends Component<IRefreshButtonProps> {
  constructor(props: IRefreshButtonProps) {
    super(props);
  }

  public render() {
    const time = this.props.lastUpdated;
    return this.props.isRefreshing ? (
      <Body>
        <Spinner />
      </Body>
    ) : (
      <Button>
        <Text>Refresh Data</Text>
        <Text note={true}>{time}</Text>
      </Button>
    );
  }
}

function mapStateToProps(state: IStoreState): IRefreshButtonProps {
  return {
    isRefreshing: false,
    lastUpdated: "2016-10-31 15:00:23"
  };
}

export default connect(mapStateToProps)(RefreshButton);
