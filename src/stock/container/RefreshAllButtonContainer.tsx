import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  IRefreshAllButtonDispatchProps,
  RefreshAllButton
} from "../component/RefreshAllButton";
import { refreshMarketData } from "../state/actions";

const mapDispatchToProps = (
  dispatch: Dispatch
): IRefreshAllButtonDispatchProps =>
  bindActionCreators(
    {
      handleRefresh: refreshMarketData.request
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(RefreshAllButton);
