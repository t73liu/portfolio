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
  List,
  Right,
  Title,
  Toast
} from "native-base";
import React, { SFC } from "react";
import { Dimensions } from "react-native";
import { PieChart, PieChartData } from "react-native-svg-charts";
import { NavigationInjectedProps } from "react-navigation";
import { InfoButton } from "../../common/component/InfoButton";
import RefreshAllButtonContainer from "../../stock/container/RefreshAllButtonContainer";
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
            text: `Book Value: ${position.ticker} = ${formatCurrency(value)}`,
            type: "success"
          });
        }
      }
    };
  });

  const onPressSearch = () => {
    props.navigation.push("SymbolLookup");
  };

  return (
    <Container>
      <Header>
        <Left>
          <InfoButton />
        </Left>
        <Body>
          <Title>Portfolio</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressSearch}>
            <Icon name="search" />
          </Button>
          <RefreshAllButtonContainer />
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
        </Card>
        <List>
          {props.portfolio.map(holding => (
            <PortfolioItemContainer
              key={holding.id}
              position={holding}
              ticker={holding.ticker}
              navigation={props.navigation}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
};
