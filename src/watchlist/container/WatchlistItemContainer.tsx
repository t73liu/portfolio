import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import {
  IStockDetailOwnProps,
  WatchlistItem
} from "../component/WatchlistItem";
import { removeTicker } from "../state/actions";

const mapStateToProps = (state: IRootState, ownProps: IStockDetailOwnProps) => {
  return state.marketData.symbolData[ownProps.ticker] === undefined
    ? ownProps
    : {
        quote: state.marketData.symbolData[ownProps.ticker].quote,
        ...ownProps
      };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      deleteTicker: removeTicker
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistItem);
