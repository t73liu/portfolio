import { connect } from "react-redux";
import { IRootState } from "../../store";
import {
  IWatchlistStateProps,
  WatchlistScreen
} from "../component/WatchlistScreen";

function mapStateToProps(state: IRootState): IWatchlistStateProps {
  return {
    tickers: state.watchlist
  };
}

export default connect(mapStateToProps)(WatchlistScreen);
