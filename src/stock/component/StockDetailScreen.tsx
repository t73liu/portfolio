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

export interface IStockDetailStateProps {
  ticker: string;
  symbolData?: ISymbolData;
  isLoading: boolean;
  errorMsg: string | null;
}

export interface IStockDetailDispatchProps {
  downloadTicker: (ticker: string) => void;
  dismissError: () => void;
}

type IStockDetailProps = NavigationInjectedProps &
  IStockDetailStateProps &
  IStockDetailDispatchProps;

export const StockDetailScreen: SFC<IStockDetailProps> = props => {
  const onPressBack = () => {
    props.navigation.pop();
  };

  const onPressExternal = () => {
    openUrl(`https://finance.yahoo.com/quote/${props.ticker}`);
  };

  const onPressDownload = () => {
    props.downloadTicker(props.ticker);
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
          <Title>Stock: {props.ticker}</Title>
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
            explanation={`Downloading ${props.ticker} market data`}
          />
        </Right>
      </Header>
      <StockDetailBody
        navigation={props.navigation}
        symbolData={props.symbolData}
      />
    </Container>
  );
};
