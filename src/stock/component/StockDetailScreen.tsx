import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Toast
} from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import { openUrl } from "../../util/ajax";
import ISymbolData from "../models/ISymbolData";
import { StockDetailBody } from "./StockDetailBody";

export interface IStockDetailOwnProps extends NavigationInjectedProps {
  ticker: string;
}

export interface IStockDetailStateProps {
  symbolData?: ISymbolData;
}

export interface IStockDetailDispatchProps {
  downloadTicker: (ticker: string) => void;
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
    Toast.show({
      text: `Downloading ${ticker} market data`
    });
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
          <Button transparent={true} onPress={onPressDownload}>
            <Icon name="download" />
          </Button>
        </Right>
      </Header>
      <StockDetailBody {...props} />
    </Container>
  );
};
