import * as R from "rambda";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import { addTicker, removeTicker } from "../../watchlist/state/actions";
import {
  GeneralTickerItem,
  IGeneralTickerItemDispatchProps,
  IGeneralTickerItemOwnProps,
  IGeneralTickerItemStateProps
} from "../component/GeneralTickerItem";

const mapStateToProps = (
  state: IRootState,
  ownProps: IGeneralTickerItemOwnProps
): IGeneralTickerItemStateProps => {
  return {
    isHeld: isHeld(state, ownProps.ticker),
    isWatched: state.watchlist.includes(ownProps.ticker)
  };
};

function isHeld(state: IRootState, ticker: string): boolean {
  return R.any(holding => holding.ticker === ticker, state.portfolio);
}

const mapDispatchToProps = (
  dispatch: Dispatch
): IGeneralTickerItemDispatchProps =>
  bindActionCreators(
    {
      addTicker,
      deleteTicker: removeTicker
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralTickerItem);
