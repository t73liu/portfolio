import { AdMobBanner, AppLoading } from "expo";
import { Body, Container, Header, Title } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RefreshFooter } from "./common/component/RefreshFooter";
import RootNavigator from "./navigation/RootNavigator";
import store, { persistor } from "./store";

interface IRootStyle {
  readonly container: ViewStyle;
  readonly header: ViewStyle;
}

const styles = StyleSheet.create<IRootStyle>({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: {
    alignItems: "center"
  }
});

export const RootContainer: React.SFC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoading />}>
        <Container style={styles.container}>
          <Header>
            <Body style={styles.header}>
              <Title>Portfolio Buddy</Title>
            </Body>
          </Header>
          <RootNavigator />
          <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
          />
          <RefreshFooter />
        </Container>
      </PersistGate>
    </Provider>
  );
};
