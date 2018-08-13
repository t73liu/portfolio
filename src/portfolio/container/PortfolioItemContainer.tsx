import { connect } from "react-redux";
import { IRootState } from "../../store";
import {
  IPortfolioItemOwnProps,
  IPortfolioItemStateProps,
  PortfolioItem
} from "../component/PortfolioItem";

const mapStateToProps = (
  state: IRootState,
  ownProps: IPortfolioItemOwnProps
): IPortfolioItemStateProps => {
  const ticker = ownProps.position.ticker;
  if (state.marketData.symbolData[ticker]) {
    return {
      quote: state.marketData.symbolData[ticker].quote
    };
  }
  return {};
};

export default connect(mapStateToProps)(PortfolioItem);
