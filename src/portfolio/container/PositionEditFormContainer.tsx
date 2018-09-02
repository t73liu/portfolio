import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import PositionEditForm, {
  IPositionEditFormDispatchProps
} from "../component/PositionEditForm";
import { deletePosition, editPosition } from "../state/actions";

const mapDispatchToProps = (
  dispatch: Dispatch
): IPositionEditFormDispatchProps =>
  bindActionCreators(
    {
      deletePosition,
      savePosition: editPosition
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(PositionEditForm);
