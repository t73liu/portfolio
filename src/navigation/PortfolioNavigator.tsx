import { createStackNavigator } from "react-navigation";
import PortfolioScreenContainer from "../portfolio/container/PortfolioScreenContainer";
import PositionEditScreenContainer from "../portfolio/container/PositionEditScreenContainer";
import StockDetailScreenContainer from "../stock/container/StockDetailScreenContainer";
import SymbolLookupScreenContainer from "../symbols/container/SymbolLookupScreenContainer";

export default createStackNavigator(
  {
    PortfolioHome: PortfolioScreenContainer,
    StockDetail: StockDetailScreenContainer,
    SymbolLookup: SymbolLookupScreenContainer,
    PositionEdit: PositionEditScreenContainer
  },
  {
    headerMode: "none",
    initialRouteName: "PortfolioHome"
  }
);
