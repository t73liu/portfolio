import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Toast
} from "native-base";
import React, { SFC } from "react";
import { Dimensions } from "react-native";
import { PieChart, PieChartData } from "react-native-svg-charts";
import { NavigationInjectedProps } from "react-navigation";
import { CodeButton } from "../../common/CodeButton";
import { formatCurrency, randomColor } from "../../util/functions";
import PortfolioItemContainer from "../container/PortfolioItemContainer";
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
            text: `${position.ticker}: ${formatCurrency(value)}`,
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
      buttonText: "Dismiss",
      type: "danger"
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
            <PortfolioItemContainer key={holding.id} position={holding} />
          ))}
        </Card>
      </Content>
    </Container>
  );
};
