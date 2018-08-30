import * as R from "rambda";
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
    symbolData: R.prop(ticker, state.marketData.symbolData)
  };
}

export default connect(mapStateToProps)(StockDetailScreen);
