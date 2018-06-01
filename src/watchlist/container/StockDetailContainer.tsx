import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import { IStockDetailProps, StockDetail } from "../component/StockDetail";
import { removeTicker } from "../state/actions";

function mapStateToProps(
  state: IRootState,
  ownProps: IStockDetailProps
): IStockDetailProps {
  return !state.marketData.symbolData.has(ownProps.ticker)
    ? ownProps
    : {
        quote: state.marketData.symbolData.get(ownProps.ticker)!.quote,
        ...ownProps
      };
}

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
