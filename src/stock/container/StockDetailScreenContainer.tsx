import * as R from "rambda";
import { NavigationInjectedProps } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import {
  IStockDetailDispatchProps,
  IStockDetailStateProps,
  StockDetailScreen
} from "../component/StockDetailScreen";
import { dismissMarketDataError, downloadTickerData } from "../state/actions";

function mapStateToProps(
  state: IRootState,
  ownProps: NavigationInjectedProps
): IStockDetailStateProps {
  const ticker = ownProps.navigation.getParam("ticker", "No Ticker Provided");
  return {
    ticker,
    symbolData: R.prop(ticker, state.marketData.symbolData),
    isLoading: state.marketData.isLoading,
    errorMsg: state.marketData.errorMsg
  };
}

const mapDispatchToProps = (dispatch: Dispatch): IStockDetailDispatchProps =>
  bindActionCreators(
    {
      downloadTicker: downloadTickerData.request,
      dismissError: dismissMarketDataError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetailScreen);
