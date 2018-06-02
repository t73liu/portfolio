import { AdMobBanner, AppLoading } from "expo";
import { Container } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RefreshFooter } from "./common/component/RefreshFooter";
import MainScreen from "./MainScreen";
import store, { persistor } from "./store";

interface IRootStyle {
  readonly container: ViewStyle;
}

const styles = StyleSheet.create<IRootStyle>({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export const RootContainer: React.SFC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoading />}>
        <Container style={styles.container}>
          <MainScreen />
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
