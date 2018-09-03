import { createStackNavigator } from "react-navigation";
import NewsScreenContainer from "../news/container/NewsScreenContainer";

export default createStackNavigator(
  {
    NewsHome: NewsScreenContainer
  },
  {
    headerMode: "none",
    initialRouteName: "NewsHome"
  }
);
