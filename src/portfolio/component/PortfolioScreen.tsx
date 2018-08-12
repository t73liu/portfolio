import {
  Body,
  Button,
  Card,
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
import { CodeButton } from "../../common/CodeButton";
import { randomColor } from "../../util/functions";
import IHolding from "../models/IHolding";

export interface IPortfolioScreenStateProps {
  portfolio: IHolding[];
}

type IPortfolioScreenProps = IPortfolioScreenStateProps &
  NavigationInjectedProps;

export const PortfolioScreen: SFC<IPortfolioScreenProps> = props => {
  const pieData: PieChartData[] = props.portfolio.map(position => {
    const value = position.buyPrice * position.amount;
    return {
      key: position.id,
      value,
      svg: {
        fill: randomColor(),
        onPress: () => {
          Toast.show({
            text: `${position.ticker}: ${value}`,
            buttonText: "Dismiss",
            type: "success"
          });
        }
      }
    };
  });

  const onPressSearch = () => {
    props.navigation.navigate("SymbolLookup");
  };

  const onPressRefresh = () => {
    Toast.show({
      text: "Disabled Refresh",
      buttonText: "Dismiss"
    });
  };

  return (
    <Container>
      <Header>
        <Left>
          <CodeButton />
        </Left>
        <Body>
          <Title>Portfolio</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressSearch}>
            <Icon name="search" />
          </Button>
          <Button transparent={true} onPress={onPressRefresh}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Card>
          <CardItem key={"piechart"} bordered={true}>
            <PieChart
              style={{
                height: Dimensions.get("window").width * 0.7,
                width: Dimensions.get("window").width * 0.7,
                flex: 1
              }}
              data={pieData}
            />
          </CardItem>
          {props.portfolio.map(holding => (
            <CardItem key={holding.id} bordered={true}>
              <Body>
                <H3>{holding.ticker}</H3>
                <Text>Buy Price: {holding.buyPrice}</Text>
                <Text>Shares: {holding.amount}</Text>
                <Text>Current Price: {127.82}</Text>
              </Body>
            </CardItem>
          ))}
        </Card>
      </Content>
    </Container>
  );
};
