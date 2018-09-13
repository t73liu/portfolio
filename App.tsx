import Expo, { AppLoading } from "expo";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootContainer from "./src/RootContainer";
import store, { persistor } from "./src/store";

interface IAppState {
  readonly loading: boolean;
}

export default class App extends React.Component<object, IAppState> {
  public readonly state: IAppState = {
    loading: true
  };

  public async componentDidMount() {
    console.log("Mounting component and loading fonts.");
    await Expo.Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
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
