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
  Title
} from "native-base";
import React, { SFC } from "react";
import IHolding from "../models/IHolding";

export interface IPortfolioScreenProps {
  portfolio: IHolding[];
}

export const PortfolioScreen: SFC<IPortfolioScreenProps> = props => {
  const onPressRefresh = () => {
    // TODO implement refresh functionality
    console.log("SHOULD REFRESH DATA");
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
