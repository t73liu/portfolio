import {
  Body,
  Button,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  Toast
} from "native-base";
import React, { SFC } from "react";
import IHolding from "../models/IHolding";

export interface IPortfolioScreenProps {
  portfolio: IHolding[];
}

export const PortfolioScreen: SFC<IPortfolioScreenProps> = props => {
  const onPressRefresh = () => {
    Toast.show({
      text: "Disabled Refresh",
      buttonText: "Dismiss"
    });
  };

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Portfolio</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressRefresh}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        <CardItem>
          <Body>
            <Text>Portfolio Here</Text>
          </Body>
        </CardItem>
      </Content>
    </Container>
  );
};
