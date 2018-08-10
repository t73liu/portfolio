import { Content, H3, List, ListItem, Text } from "native-base";
import React, { SFC } from "react";
import { IStockDetailStateProps } from "./StockDetailScreen";

export const StockDetailBody: SFC<IStockDetailStateProps> = props => {
  if (typeof props.symbolData === "undefined") {
    return (
      <Content>
        <List>
          <ListItem key="NO INFO AVAILABLE">
            <H3>NO INFO AVAILABLE!</H3>
          </ListItem>
        </List>
      </Content>
    );
  } else {
    return (
      <Content>
        <List>
          <ListItem itemDivider={true} key="INFO">
            <H3>INFO</H3>
          </ListItem>
          <ListItem key="Name">
            <Text>Name: {props.symbolData!.quote.companyName}</Text>
          </ListItem>
          <ListItem key="Sector">
            <Text>Sector: {props.symbolData!.quote.sector}</Text>
          </ListItem>
          <ListItem key="Exchange">
            <Text>Exchange: {props.symbolData!.quote.primaryExchange}</Text>
          </ListItem>
          <ListItem itemDivider={true} key="QUOTE">
            <H3>QUOTE</H3>
          </ListItem>
          <ListItem key="Open">
            <Text>Open: {props.symbolData!.quote.open}</Text>
          </ListItem>
          <ListItem key="Close">
            <Text>Close: {props.symbolData!.quote.close}</Text>
          </ListItem>
          <ListItem key="High">
            <Text>High: {props.symbolData!.quote.high}</Text>
          </ListItem>
          <ListItem key="Low">
            <Text>Low: {props.symbolData!.quote.low}</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
};
