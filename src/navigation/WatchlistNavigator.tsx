import { createStackNavigator } from "react-navigation";
import { PositionEditScreen } from "../portfolio/component/PositionEditScreen";
import { StockDetailScreen } from "../stock/component/StockDetailScreen";
import SymbolLookupScreenContainer from "../symbols/container/SymbolLookupScreenContainer";
import WatchlistScreenContainer from "../watchlist/container/WatchlistScreenContainer";

export default createStackNavigator(
  {
    WatchlistHome: WatchlistScreenContainer,
    StockDetail: StockDetailScreen,
    SymbolLookup: SymbolLookupScreenContainer,
    PositionEdit: PositionEditScreen
  },
  {
    headerMode: "none",
    initialRouteName: "WatchlistHome"
  }
);
