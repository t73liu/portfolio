import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Text,
  Title
} from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import IHolding from "../models/IHolding";

export interface IPositionEditStateProps {
  ticker: string;
  positions: IHolding[];
}

type IPositionEditProps = IPositionEditStateProps & NavigationInjectedProps;

export const PositionEditScreen: SFC<IPositionEditProps> = props => {
  const onPressBack = () => {
    props.navigation.pop();
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
          <Title>Position: {props.ticker}</Title>
        </Body>
      </Header>
      <Content>
        {props.positions.map(position => (
          <Text key={position.id}>{JSON.stringify(position)}</Text>
        ))}
      </Content>
    </Container>
  );
};
