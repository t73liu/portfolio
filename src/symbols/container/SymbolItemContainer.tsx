import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IQuote from "../../market/models/IQuote";
import { IRootState } from "../../store";
import { addTicker, removeTicker } from "../../watchlist/state/actions";
import {
  ISymbolItemDispatchProps,
  ISymbolItemOwnProps,
  ISymbolItemStateProps,
  SymbolItem
} from "../component/SymbolItem";

const mapStateToProps = (
  state: IRootState,
  ownProps: ISymbolItemOwnProps
): ISymbolItemStateProps => {
  return {
    name: getName(state, ownProps.ticker),
    quote: getQuote(state, ownProps.ticker),
    isHeld: false,
    isWatched: state.watchlist.includes(ownProps.ticker)
  };
};

function getName(state: IRootState, ticker: string): string {
  const match = state.symbolName.all.filter(name => name.symbol === ticker);
  if (match.length !== 1) {
    return "Not Found";
  }
  return typeof match[0].name === "undefined" ? "Not Provided" : match[0].name!;
}

function getQuote(state: IRootState, ticker: string): IQuote | undefined {
  return state.marketData.symbolData[ticker] === undefined
    ? undefined
    : state.marketData.symbolData[ticker].quote;
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
