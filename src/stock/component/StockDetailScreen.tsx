import {
  Body,
  Button,
  Card,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Title
} from "native-base";
import React, { SFC } from "react";
import { NavigationScreenProps } from "react-navigation";

interface IStockDetailOwnProps {
  ticker: string;
}

export const StockDetailScreen: SFC<NavigationScreenProps<IStockDetailOwnProps>
> = props => {
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
      <Content>
        <Card />
      </Content>
    </Container>
  );
};
