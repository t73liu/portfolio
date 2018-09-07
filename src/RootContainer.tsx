import { AdMobBanner, AdMobRewarded, AppLoading } from "expo";
import { Container, Root } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
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

AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
AdMobRewarded.setTestDeviceID("EMULATOR");

export const RootContainer: React.SFC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoading />}>
        <Container style={styles.container}>
          <Root>
            <RootNavigator />
            <AdMobBanner
              bannerSize="smartBannerLandscape"
              adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
            />
          </Root>
        </Container>
      </PersistGate>
    </Provider>
  );
};
