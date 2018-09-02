import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title
} from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import DownloadButton from "../../common/component/DownloadButton";
import { openUrl } from "../../util/ajax";
import ISymbolData from "../models/ISymbolData";
import { StockDetailBody } from "./StockDetailBody";

export interface IStockDetailOwnProps extends NavigationInjectedProps {
  ticker: string;
}

export interface IStockDetailStateProps {
  symbolData?: ISymbolData;
  isLoading: boolean;
  errorMsg: string | null;
}

export interface IStockDetailDispatchProps {
  downloadTicker: (ticker: string) => void;
  dismissError: () => void;
}

export type IStockDetailProps = IStockDetailOwnProps &
  IStockDetailStateProps &
  IStockDetailDispatchProps;

export const StockDetailScreen: SFC<IStockDetailProps> = props => {
  const ticker = props.navigation.getParam("ticker", "No Ticker Provided");

  const onPressBack = () => {
    props.navigation.pop();
  };

  const onPressExternal = () => {
    openUrl(`https://finance.yahoo.com/quote/${ticker}`);
  };

  const onPressDownload = () => {
    props.downloadTicker(ticker);
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent={true} onPress={onPressBack}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Stock: {ticker}</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressExternal}>
            <Icon name="md-link" />
          </Button>
          <DownloadButton
            iconType={"download"}
            isLoading={props.isLoading}
            errorMsg={props.errorMsg}
            handlePress={onPressDownload}
            handleToast={props.dismissError}
            explanation={`Downloading ${ticker} market data`}
          />
        </Right>
      </Header>
      <StockDetailBody {...props} />
    </Container>
  );
};
