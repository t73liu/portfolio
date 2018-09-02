import {
  Body,
  Button,
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
import { NavigationInjectedProps } from "react-navigation";
import IHolding from "../models/IHolding";

export interface IPositionEditStateProps {
  ticker: string;
  positions: IHolding[];
}

export interface IPositionEditDispatchProps {
  addPosition: (ticker: string) => void;
}

type IPositionEditProps = IPositionEditStateProps &
  IPositionEditDispatchProps &
  NavigationInjectedProps;

export const PositionEditScreen: SFC<IPositionEditProps> = props => {
  const onPressBack = () => {
    props.navigation.pop();
  };

  const onPressAdd = () => {
    props.addPosition(props.ticker);
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
        <Right>
          <Button transparent={true} onPress={onPressAdd}>
            <Icon name="add" />
          </Button>
        </Right>
      </Header>
      {/*TODO numeric keyboard*/}
      <Content>
        {props.positions.map(position => (
          <Text key={position.id}>{JSON.stringify(position)}</Text>
        ))}
      </Content>
    </Container>
  );
};
