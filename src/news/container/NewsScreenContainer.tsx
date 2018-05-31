import { connect } from "react-redux";
import { IRootState } from "../../store";
import { INewsScreenProps, NewsScreen } from "../component/NewsScreen";

const mapStateToProps = (state: IRootState): INewsScreenProps => ({
  news: []
});

export default connect(mapStateToProps)(NewsScreen);
