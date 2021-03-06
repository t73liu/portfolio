import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import SymbolLookupScreen, {
  ISymbolLookupDispatchProps,
  ISymbolLookupStateProps
} from "../component/SymbolLookupScreen";
import {
  dismissSymbolDataError,
  refreshSymbolName,
  searchSymbol
} from "../state/actions";

const mapStateToProps = (state: IRootState): ISymbolLookupStateProps => {
  return {
    searchResult: state.symbolName.filtered,
    isLoading: state.symbolName.isLoading,
    errorMsg: state.symbolName.errorMsg
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ISymbolLookupDispatchProps =>
  bindActionCreators(
    {
      search: searchSymbol,
      downloadTickers: refreshSymbolName.request,
      dismissError: dismissSymbolDataError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SymbolLookupScreen);
