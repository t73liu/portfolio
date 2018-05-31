import {AppLoading} from "expo";
import React, {Component} from "react";
import {StatusBar, StyleSheet, View, ViewStyle} from "react-native";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./store";
import MainScreen from "./MainScreen";

interface IRootStyle {
    readonly container: ViewStyle;
}

const styles = StyleSheet.create<IRootStyle>({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
});

export default class RootContainer extends Component {
    public render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<AppLoading/>}>
                    <View style={styles.container}>
                        <MainScreen/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}
