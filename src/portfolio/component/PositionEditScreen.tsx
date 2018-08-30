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
import { NavigationInjectedProps } from "react-navigation";

interface IPositionEditOwnProps {
  ticker: string;
}

type IPositionEditProps = IPositionEditOwnProps & NavigationInjectedProps;

export const PositionEditScreen: SFC<IPositionEditProps> = props => {
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
          <Title>Position: {ticker}</Title>
        </Body>
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
};
