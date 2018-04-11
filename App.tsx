import * as Expo from 'expo';
import * as React from 'react';
import {StatusBar, StyleSheet, View, ViewStyle} from 'react-native'

import MainScreen from "./src/MainScreen";

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
            <View style={styles.container}>
                <MainScreen/>
            </View>
        );
    }
}
