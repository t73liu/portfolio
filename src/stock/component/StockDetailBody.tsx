import { Content, H3, List, ListItem } from "native-base";
import React, { SFC } from "react";
import SymbolItemContainer from "../../symbols/container/SymbolItemContainer";
import { formatCurrency } from "../../util/functions";
import { StockDetailInfo } from "./StockDetailInfo";
import { IStockDetailProps } from "./StockDetailScreen";

export const StockDetailBody: SFC<IStockDetailProps> = props => {
  // TODO add more content (f-score, m-score, etc)
  const renderFound = () => {
    const quote = props.symbolData!.quote;

    return (
      <Content>
        <List>
          <ListItem itemDivider={true} key="INFO">
            <H3>INFO</H3>
          </ListItem>
          <StockDetailInfo
            key={"Name"}
            title={"Name"}
            value={quote.companyName}
          />
          <StockDetailInfo
            key={"Sector"}
            title={"Sector"}
            value={quote.sector}
          />
          <StockDetailInfo
            key={"Exchange"}
            title={"Exchange"}
            value={quote.primaryExchange}
            explanation={"Stock's Primary Listing Exchange"}
          />
          <ListItem itemDivider={true} key="QUOTE">
            <H3>QUOTE</H3>
          </ListItem>
          <StockDetailInfo
            key={"Open"}
            title={"Open"}
            value={formatCurrency(quote.open)}
          />
          <StockDetailInfo
            key={"Close"}
            title={"Close"}
            value={formatCurrency(quote.close)}
          />
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
