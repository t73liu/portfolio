import * as Expo from 'expo';
import * as React from 'react';
import {StatusBar, StyleSheet, View, ViewStyle} from 'react-native'
import {Provider} from 'react-redux';

import {store} from './src/store/configureStore'
import MainScreen from './src/MainScreen';

interface Style {
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    }
});

const initialState = {loading: true};

type State = Readonly<typeof initialState>

export default class App extends React.Component<object, State> {
    readonly state: State = initialState;

    async componentDidMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading/>;
        }
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainScreen/>
                </View>
            </Provider>
        );
    }
}
