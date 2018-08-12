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
import ISymbolData from "../../market/models/ISymbolData";
import { openUrl } from "../../util/ajax";
import { StockDetailBody } from "./StockDetailBody";

export interface IStockDetailOwnProps extends NavigationInjectedProps {
  ticker: string;
}

export interface IStockDetailStateProps {
  symbolData?: ISymbolData;
}

type IStockDetailProps = IStockDetailOwnProps & IStockDetailStateProps;

export const StockDetailScreen: SFC<IStockDetailProps> = props => {
  const ticker = props.navigation.getParam("ticker", "No Ticker Provided");

  const onPressBack = () => {
    props.navigation.goBack();
  };

  const onPressExternal = () => {
    openUrl(`https://finance.yahoo.com/quote/${ticker}`);
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
        </Right>
      </Header>
      <StockDetailBody symbolData={props.symbolData} />
    </Container>
  );
};
