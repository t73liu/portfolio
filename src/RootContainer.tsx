import { AppLoading } from "expo";
import React from "react";
import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
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
        <View style={styles.container}>
          <MainScreen />
        </View>
      </PersistGate>
    </Provider>
  );
};
