import { createStackNavigator } from "react-navigation";
import { PositionEditScreen } from "../portfolio/component/PositionEditScreen";
import PortfolioScreenContainer from "../portfolio/container/PortfolioScreenContainer";
import StockDetailScreenContainer from "../stock/container/StockDetailScreenContainer";
import SymbolLookupScreenContainer from "../symbols/container/SymbolLookupScreenContainer";

export default createStackNavigator(
  {
    PortfolioHome: PortfolioScreenContainer,
    StockDetail: StockDetailScreenContainer,
    SymbolLookup: SymbolLookupScreenContainer,
    PositionEdit: PositionEditScreen
  },
  {
    headerMode: "none",
    initialRouteName: "PortfolioHome"
  }
);
