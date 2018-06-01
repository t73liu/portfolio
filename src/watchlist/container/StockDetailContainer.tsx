import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import { IStockDetailOwnProps, StockDetail } from "../component/StockDetail";
import { removeTicker } from "../state/actions";

const mapStateToProps = (state: IRootState, ownProps: IStockDetailOwnProps) => {
  return !state.marketData.symbolData.has(ownProps.ticker)
    ? ownProps
    : {
        quote: state.marketData.symbolData.get(ownProps.ticker)!.quote,
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
)(StockDetail);
