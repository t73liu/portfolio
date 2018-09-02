import * as R from "rambda";
import { NavigationInjectedProps } from "react-navigation";
import { connect } from "react-redux";
import { IRootState } from "../../store";
import {
  IPositionEditStateProps,
  PositionEditScreen
} from "../component/PositionEditScreen";

const mapStateToProps = (
  state: IRootState,
  ownProps: NavigationInjectedProps
): IPositionEditStateProps => {
  const ticker = ownProps.navigation.getParam("ticker", "No Ticker Provided");
  return {
    ticker,
    positions:
      ticker === "No Ticker Provided"
        ? []
        : R.filter(position => position.ticker === ticker, state.portfolio)
  };
};

export default connect(mapStateToProps)(PositionEditScreen);
