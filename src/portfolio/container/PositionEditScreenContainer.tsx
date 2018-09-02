import * as R from "rambda";
import { NavigationInjectedProps } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import {
  IPositionEditDispatchProps,
  IPositionEditStateProps,
  PositionEditScreen
} from "../component/PositionEditScreen";
import { addPosition } from "../state/actions";

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

const mapDispatchToProps = (dispatch: Dispatch): IPositionEditDispatchProps =>
  bindActionCreators(
    {
      addPosition
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionEditScreen);
