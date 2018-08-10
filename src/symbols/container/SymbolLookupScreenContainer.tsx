import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../store";
import SymbolLookupScreen from "../component/SymbolLookupScreen";
import { searchSymbol } from "../state/actions";

const mapStateToProps = (state: IRootState) => {
  return {
    searchResult: state.symbolName.filtered
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      search: searchSymbol
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SymbolLookupScreen);
