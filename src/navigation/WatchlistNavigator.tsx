import { createStackNavigator } from "react-navigation";
import PositionEditScreenContainer from "../portfolio/container/PositionEditScreenContainer";
import StockDetailScreenContainer from "../stock/container/StockDetailScreenContainer";
import SymbolLookupScreenContainer from "../symbols/container/SymbolLookupScreenContainer";
import WatchlistScreenContainer from "../watchlist/container/WatchlistScreenContainer";

export default createStackNavigator(
  {
    WatchlistHome: WatchlistScreenContainer,
    StockDetail: StockDetailScreenContainer,
    SymbolLookup: SymbolLookupScreenContainer,
    PositionEdit: PositionEditScreenContainer
  },
  {
    headerMode: "none",
    initialRouteName: "WatchlistHome"
  }
);
