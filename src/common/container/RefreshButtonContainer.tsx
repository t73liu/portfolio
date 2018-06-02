import { connect } from "react-redux";
import { IRootState } from "../../store";
import { IRefreshButtonProps, RefreshButton } from "../component/RefreshButton";

function mapStateToProps(state: IRootState): IRefreshButtonProps {
  return {
    isRefreshing: false,
    lastUpdated: "2016-10-31 15:00:23"
  };
}

export default connect(mapStateToProps)(RefreshButton);
