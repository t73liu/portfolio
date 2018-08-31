import * as R from "rambda";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import {
  IStockDetailDispatchProps,
  IStockDetailOwnProps,
  IStockDetailStateProps,
  StockDetailScreen
} from "../component/StockDetailScreen";
import { downloadTickerData } from "../state/actions";

function mapStateToProps(
  state: IRootState,
  ownProps: IStockDetailOwnProps
): IStockDetailStateProps {
  const ticker = ownProps.navigation.getParam("ticker", "No Ticker Provided");
  return {
    symbolData: R.prop(ticker, state.marketData.symbolData)
  };
}

const mapDispatchToProps = (dispatch: Dispatch): IStockDetailDispatchProps =>
  bindActionCreators(
    {
      downloadTicker: downloadTickerData.request
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetailScreen);
