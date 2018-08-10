import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Title
} from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import ISymbolData from "../../market/models/ISymbolData";
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
      </Header>
      <StockDetailBody symbolData={props.symbolData}/>
    </Container>
  );
};
