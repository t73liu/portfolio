import { connect } from "react-redux";
import { IRootState } from "../../store";
import { IWatchlistProps, WatchlistScreen } from "../component/WatchlistScreen";

function mapStateToProps(state: IRootState): IWatchlistProps {
  return {
    tickers: state.watchlist
  };
}

export default connect(mapStateToProps)(WatchlistScreen);
