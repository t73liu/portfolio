import { Body, Card, CardItem, Content, Text } from "native-base";
import React, { Component } from "react";

export default class PortfolioScreen extends Component {
  public render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>Portfolio Here</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
