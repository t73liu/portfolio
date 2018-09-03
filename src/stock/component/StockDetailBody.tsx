import { Content, H3, List, ListItem } from "native-base";
import React, { SFC } from "react";
import SymbolItemContainer from "../../symbols/container/SymbolItemContainer";
import { decimalToPercent, formatCurrency, formatDecimal } from "../../util/functions";
import { StockDetailInfo } from "./StockDetailInfo";
import { IStockDetailProps } from "./StockDetailScreen";

export const StockDetailBody: SFC<IStockDetailProps> = props => {
  const renderFound = () => {
    const quote = props.symbolData!.quote;
    const stats = props.symbolData!.stats;
    const financials = props.symbolData!.financials.financials;
    let revenueGrowth = null;
    let debtRatio = null;
    let grossMargin = null;
    if (financials.length >= 0) {
      grossMargin = financials[0].grossProfit / financials[0].totalRevenue;
      if(financials[0].totalDebt !== null && financials[0].totalAssets !== null) {
        debtRatio = financials[0].totalDebt! / financials[0].totalAssets!;
      }
      if (financials.length >= 1) {
        revenueGrowth = (financials[0].totalRevenue - financials[1].totalRevenue) / financials[1].totalRevenue;
      }
    }

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
          <ListItem itemDivider={true} key="ANALYSIS">
            <H3>ANALYSIS</H3>
          </ListItem>
          <StockDetailInfo
            key={"Revenue Growth"}
            title={"Revenue Growth"}
            value={revenueGrowth ? decimalToPercent(revenueGrowth) : "N/A"}
            type={revenueGrowth ? (revenueGrowth < 0 ? "negative" : "positive") : undefined}
          />
          <StockDetailInfo
            key={"Gross Margin"}
            title={"Gross Margin"}
            value={grossMargin ? decimalToPercent(grossMargin) : "N/A"}
            explanation={"Indicator of profitability based on sales and cost of goods"}
          />
          <StockDetailInfo
            key={"Debt Ratio"}
            title={"Debt Ratio"}
            value={debtRatio ? formatDecimal(debtRatio) : "N/A"}
            type={debtRatio ? (debtRatio < 0.5 ? "negative" : "positive") : undefined}
            explanation={"High ratio indicates more risk and lower financial flexibility"}
          />
          <ListItem itemDivider={true} key="QUOTE">
            <H3>QUOTE</H3>
          </ListItem>
          <StockDetailInfo
            key={"Close"}
            title={"Close"}
            value={formatCurrency(quote.close)}
          />
          <StockDetailInfo
            key={"Market Cap"}
            title={"Market Cap"}
            value={formatCurrency(quote.marketCap)}
          />
          <StockDetailInfo
            key={"One Month Change"}
            title={"One Month Change"}
            value={decimalToPercent(stats.month1ChangePercent)}
            type={(stats.month1ChangePercent < 0) ? "negative" : "positive"}
          />
          <StockDetailInfo
            key={"Six Month Change"}
            title={"Six Month Change"}
            value={decimalToPercent(stats.month6ChangePercent)}
            type={(stats.month6ChangePercent < 0) ? "negative" : "positive"}
          />
          <StockDetailInfo
            key={"One Year Change"}
            title={"One Year Change"}
            value={decimalToPercent(stats.year1ChangePercent)}
            type={(stats.year1ChangePercent < 0) ? "negative" : "positive"}
          />
          <StockDetailInfo
            key={"Five Year Change"}
            title={"Five Year Change"}
            value={decimalToPercent(stats.year5ChangePercent)}
            type={(stats.year5ChangePercent < 0) ? "negative" : "positive"}
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
