import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import RootComponent, {
  IRootComponentDispatchProps,
  IRootComponentStateProps
} from "./RootComponent";
import { refreshMarketData } from "./stock/state/actions";
import { IRootState } from "./store";
import { refreshSymbolName } from "./symbols/state/actions";

const mapStateToProps = (state: IRootState): IRootComponentStateProps => {
  return {
    marketDataLoading: state.marketData.isLoading,
    symbolNameLoading: state.symbolName.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IRootComponentDispatchProps =>
  bindActionCreators(
    {
      interruptMarketDataRequest: refreshMarketData.failure,
      interruptSymbolNameRequest: refreshSymbolName.failure
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootComponent);
