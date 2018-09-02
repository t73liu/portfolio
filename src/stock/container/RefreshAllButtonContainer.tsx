import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import RefreshAllButton, {
  IRefreshAllButtonDispatchProps,
  IRefreshAllButtonStateProps
} from "../component/RefreshAllButton";
import { dismissMarketDataError, refreshMarketData } from "../state/actions";

const mapStateToProps = (state: IRootState): IRefreshAllButtonStateProps => {
  return {
    isLoading: state.marketData.isLoading,
    errorMsg: state.marketData.errorMsg
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IRefreshAllButtonDispatchProps =>
  bindActionCreators(
    {
      handleRefresh: refreshMarketData.request,
      dismissError: dismissMarketDataError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RefreshAllButton);
