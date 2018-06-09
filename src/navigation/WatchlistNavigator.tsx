import { createStackNavigator } from "react-navigation";
import { StockDetailScreen } from "../stock/component/StockDetailScreen";
import { WatchlistAddScreen } from "../watchlist/component/WatchlistAddScreen";
import WatchlistScreenContainer from "../watchlist/container/WatchlistScreenContainer";

export default createStackNavigator(
  {
    WatchlistHome: WatchlistScreenContainer,
    StockDetail: StockDetailScreen,
    WatchlistAdd: WatchlistAddScreen
  },
  {
    headerMode: "none",
    initialRouteName: "WatchlistHome"
  }
);
