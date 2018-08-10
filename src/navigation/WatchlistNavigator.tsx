import { createStackNavigator } from "react-navigation";
import { StockDetailScreen } from "../stock/component/StockDetailScreen";
import SymbolLookupScreen from "../symbols/component/SymbolLookupScreen";
import WatchlistScreenContainer from "../watchlist/container/WatchlistScreenContainer";

export default createStackNavigator(
  {
    WatchlistHome: WatchlistScreenContainer,
    StockDetail: StockDetailScreen,
    SymbolLookup: SymbolLookupScreen
  },
  {
    headerMode: "none",
    initialRouteName: "WatchlistHome"
  }
);
