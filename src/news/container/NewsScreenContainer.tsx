import { connect } from "react-redux";
import { IRootState } from "../../store";
import {
  INewsScreenProps,
  ITickerNews,
  NewsScreen
} from "../component/NewsScreen";

const mapStateToProps = (state: IRootState): INewsScreenProps => {
  const list = Object.keys(state.marketData.symbolData).map(ticker =>
    fetchData(state, ticker)
  );
  return {
    tickerNewsList: list
  };
};

function fetchData(state: IRootState, ticker: string): ITickerNews {
  return {
    ticker,
    news: state.marketData.symbolData[ticker].news
  };
}

export default connect(mapStateToProps)(NewsScreen);
