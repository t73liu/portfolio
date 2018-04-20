import * as Expo from 'expo';
import * as React from 'react';
import {AppStateStatus, AsyncStorage, StatusBar, StyleSheet, View, ViewStyle} from 'react-native'
import {Store} from "redux";
import {Provider} from 'react-redux';

import {defaultStore, getPersistedStore} from './src/store/configureStore'
import MainScreen from './src/MainScreen';
import {StoreState} from "./src/store/types";

interface Style {
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    }
});

interface State {
    loading: boolean
    store: Store<StoreState>
}

export default class App extends React.Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            loading: true,
            store: defaultStore
        };
    }

    async componentDidMount() {
        console.log("Mounting component and loading Fonts and State");

        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });

        console.log("Adding Event Listener to Update Storage");
        // AppState.addEventListener('change', this.updateStorage.bind(this));

        const store = await getPersistedStore();

        console.log(`Updating Store State ${JSON.stringify(store.getState()).slice(0,100)} ....`);
        this.setState({
            store: store,
            loading: false
        });
    }

    private updateStorage(appState: AppStateStatus) {
        console.log(`Current app state: ${appState} and internal state: ${JSON.stringify(this.state)}`);
        AsyncStorage.setItem("state", JSON.stringify(this.state.store!.getState()))
            .then(value => console.log(`Successful update of store: ${value}`))
            .catch(reason => console.log(`Failed update of store: ${reason}`));
    }

    async componentWillUnmount() {
        console.log(`Unmounting component and removing event listener`);
        await AsyncStorage.clear();
        // AppState.removeEventListener('change', this.updateStorage.bind(this));
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading/>;
        }
        return (
            <Provider store={this.state.store}>
                <View style={styles.container}>
                    <MainScreen/>
                </View>
            </Provider>
        );
    }
}
