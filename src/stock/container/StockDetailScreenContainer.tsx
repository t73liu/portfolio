import { connect } from "react-redux";
import { IRootState } from "../../store";
import {
  IStockDetailOwnProps,
  IStockDetailStateProps,
  StockDetailScreen
} from "../component/StockDetailScreen";

function mapStateToProps(
  state: IRootState,
  ownProps: IStockDetailOwnProps
): IStockDetailStateProps {
  const ticker = ownProps.navigation.getParam("ticker", "No Ticker Provided");
  return {
    symbolData:
      state.marketData.symbolData[ticker] === undefined
        ? undefined
        : state.marketData.symbolData[ticker]
  };
}

export default connect(mapStateToProps)(StockDetailScreen);
