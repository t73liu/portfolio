import { connect } from "react-redux";
import { IRootState } from "../../store";
import {
  IPortfolioScreenStateProps,
  PortfolioScreen
} from "../component/PortfolioScreen";

const mapStateToProps = (state: IRootState): IPortfolioScreenStateProps => {
  return {
    portfolio: state.portfolio
  };
};

export default connect(mapStateToProps)(PortfolioScreen);
