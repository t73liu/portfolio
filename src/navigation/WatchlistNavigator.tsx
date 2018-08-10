import { createStackNavigator } from "react-navigation";
import { PositionEditScreen } from "../portfolio/component/PositionEditScreen";
import StockDetailScreenContainer from "../stock/container/StockDetailScreenContainer";
import SymbolLookupScreenContainer from "../symbols/container/SymbolLookupScreenContainer";
import WatchlistScreenContainer from "../watchlist/container/WatchlistScreenContainer";

export default createStackNavigator(
  {
    WatchlistHome: WatchlistScreenContainer,
    StockDetail: StockDetailScreenContainer,
    SymbolLookup: SymbolLookupScreenContainer,
    PositionEdit: PositionEditScreen
  },
  {
    headerMode: "none",
    initialRouteName: "WatchlistHome"
  }
);
