import * as R from "rambda";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IDictionary from "../../common/models/IDictionary";
import IQuote from "../../stock/models/IQuote";
import { IRootState } from "../../store";
import { addTicker, removeTicker } from "../../watchlist/state/actions";
import {
  ISymbolItemDispatchProps,
  ISymbolItemOwnProps,
  ISymbolItemStateProps,
  SymbolItem
} from "../component/SymbolItem";
import ISymbolName from "../models/ISymbolName";

const mapStateToProps = (
  state: IRootState,
  ownProps: ISymbolItemOwnProps
): ISymbolItemStateProps => {
  return {
    name: getName(state, ownProps.ticker),
    quote: getQuote(state, ownProps.ticker),
    isHeld: isHeld(state, ownProps.ticker),
    isWatched: state.watchlist.includes(ownProps.ticker)
  };
};

function getName(state: IRootState, ticker: string): string {
  if (!R.has(ticker, state.symbolName.all)) {
    return "Not Found";
  }
  const match = R.prop<string, IDictionary<ISymbolName>>(
    ticker,
    state.symbolName.all
  );
  return R.has("name", match) ? match.name! : "Not Provided";
}

function getQuote(state: IRootState, ticker: string): IQuote | undefined {
  return R.has(ticker, state.marketData.symbolData)
    ? state.marketData.symbolData[ticker].quote
    : undefined;
}

function isHeld(state: IRootState, ticker: string): boolean {
  const match = state.portfolio.filter(holding => holding.ticker === ticker);
  return match.length !== 0;
}

const mapDispatchToProps = (dispatch: Dispatch): ISymbolItemDispatchProps =>
  bindActionCreators(
    {
      addTicker,
      deleteTicker: removeTicker
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SymbolItem);
