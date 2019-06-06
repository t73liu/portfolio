import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootContainer from "./src/RootContainer";
import store, { persistor } from "./src/store";

export default class App extends React.PureComponent {
  public readonly state = {
    loading: true
  };

  public async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({
      loading: false
    });
  }

  public render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<AppLoading />}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}
