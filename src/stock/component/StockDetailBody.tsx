import { Content, H3, List, ListItem, Text } from "native-base";
import React, { SFC } from "react";
import SymbolItemContainer from "../../symbols/container/SymbolItemContainer";
import { formatCurrency } from "../../util/functions";
import { IStockDetailProps } from "./StockDetailScreen";

export const StockDetailBody: SFC<IStockDetailProps> = props => {
  // TODO add more content (f-score, m-score, etc) + explanation toasts
  const renderFound = () => {
    const quote = props.symbolData!.quote;
    return (
      <Content>
        <List>
          <ListItem itemDivider={true} key="INFO">
            <H3>INFO</H3>
          </ListItem>
          <ListItem key="Name">
            <Text>Name: {quote.companyName}</Text>
          </ListItem>
          <ListItem key="Sector">
            <Text>Sector: {quote.sector}</Text>
          </ListItem>
          <ListItem key="Exchange">
            <Text>Exchange: {quote.primaryExchange}</Text>
          </ListItem>
          <ListItem itemDivider={true} key="QUOTE">
            <H3>QUOTE</H3>
          </ListItem>
          <ListItem key="Open">
            <Text>Open: {formatCurrency(quote.open)}</Text>
          </ListItem>
          <ListItem key="Close">
            <Text>Close: {formatCurrency(quote.close)}</Text>
          </ListItem>
        </List>
        <List>
          <ListItem itemDivider={true} key="PEERS">
            <H3>PEERS</H3>
          </ListItem>
          {props.symbolData!.peers.map(ticker => (
            <SymbolItemContainer
              key={ticker}
              ticker={ticker}
              navigation={props.navigation}
            />
          ))}
        </List>
      </Content>
    );
  };

  const renderNotFound = () => {
    return (
      <Content>
        <List>
          <ListItem key="NO INFO AVAILABLE">
            <H3>NO INFO AVAILABLE!</H3>
          </ListItem>
        </List>
      </Content>
    );
  };

  if (props.symbolData) {
    return renderFound();
  }
  return renderNotFound();
};
