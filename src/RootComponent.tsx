import { AdMobBanner, AdMobRewarded } from "expo";
import { Container, Root } from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import { IError } from "./util/ajax";

export interface IRootComponentStateProps {
  marketDataLoading: boolean;
  symbolNameLoading: boolean;
}

export interface IRootComponentDispatchProps {
  interruptMarketDataRequest: (error: IError) => any;
  interruptSymbolNameRequest: (error: IError) => any;
}

type IRootComponentProps = IRootComponentStateProps &
  IRootComponentDispatchProps;

AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
AdMobRewarded.setTestDeviceID("EMULATOR");

export default class RootComponent extends React.Component<
  IRootComponentProps
> {
  public componentDidMount() {
    if (this.props.marketDataLoading) {
      this.props.interruptMarketDataRequest({
        problem: "Interrupted",
        explanation: "Market data download was interrupted"
      });
    }
    if (this.props.symbolNameLoading) {
      this.props.interruptSymbolNameRequest({
        problem: "Interrupted Request",
        explanation: "Symbol name download was interrupted"
      });
    }
  }

  public render() {
    return (
      <Container
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight
        }}
      >
        <Root>
          <RootNavigator />
          <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
          />
        </Root>
      </Container>
    );
  }
}
