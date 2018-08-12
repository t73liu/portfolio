import {
  Body,
  Button,
  CardItem,
  Container,
  Content,
  H3,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  Toast
} from "native-base";
import React, { SFC } from "react";
import { Dimensions } from "react-native";
import { PieChart, PieChartData } from "react-native-svg-charts";
import { NavigationInjectedProps } from "react-navigation";
import { randomColor } from "../../util/functions";
import IHolding from "../models/IHolding";

export interface IPortfolioScreenStateProps {
  portfolio: IHolding[];
}

type IPortfolioScreenProps = IPortfolioScreenStateProps &
  NavigationInjectedProps;

export const PortfolioScreen: SFC<IPortfolioScreenProps> = props => {
  const onPressSearch = () => {
    props.navigation.navigate("SymbolLookup");
  };

  const onPressRefresh = () => {
    Toast.show({
      text: "Disabled Refresh",
      buttonText: "Dismiss"
    });
  };

  const pieData: PieChartData[] = props.portfolio.map(position => {
    return {
      key: position.id,
      value: position.buyPrice * position.amount,
      svg: {
        fill: randomColor()
      }
    };
  });

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Portfolio</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressSearch}>
            <Icon name="search"/>
          </Button>
          <Button transparent={true} onPress={onPressRefresh}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        <CardItem key={"piechart"}>
          <PieChart
            style={{
              height: Dimensions.get("window").width * 0.7,
              width: Dimensions.get("window").width * 0.7
            }}
            data={pieData}
          />
        </CardItem>
        {props.portfolio.map(holding => (
          <CardItem key={holding.id}>
            <Body>
            <H3>{holding.ticker}</H3>
            <Text>Buy Price: {holding.buyPrice}</Text>
            <Text>Shares: {holding.amount}</Text>
            <Text>Current Price: {127.82}</Text>
            </Body>
          </CardItem>
        ))}
      </Content>
    </Container>
  );
};
