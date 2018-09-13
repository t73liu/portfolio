import { Content, H3, List, ListItem } from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import SymbolItemContainer from "../../symbols/container/SymbolItemContainer";
import {
  decimalToPercent,
  formatCurrency,
  formatDecimal,
  formatPercent
} from "../../util/functions";
import ISymbolData from "../models/ISymbolData";
import { StockDetailInfo } from "./StockDetailInfo";
import StockGraph from "./StockGraph";

function calcRevenueGrowth(data: ISymbolData): number | null {
  const financials = data.financials.financials;
  return financials && financials.length >= 1
    ? (financials[0].totalRevenue - financials[1].totalRevenue) /
        financials[1].totalRevenue
    : null;
}

function calcDebtRatio(data: ISymbolData): number | null {
  const financials = data.financials.financials;
  return financials &&
    financials.length >= 0 &&
    financials[0].totalDebt !== null &&
    financials[0].totalAssets !== null
    ? financials[0].totalDebt! / financials[0].totalAssets!
    : null;
}

function calcGrossMargin(data: ISymbolData): number | null {
  const financials = data.financials.financials;
  return financials && financials.length >= 0
    ? financials[0].grossProfit / financials[0].totalRevenue
    : null;
}

interface IStockDetailBodyOwnProps {
  symbolData?: ISymbolData;
}

type IStockDetailBodyProps = IStockDetailBodyOwnProps & NavigationInjectedProps;

export const StockDetailBody: SFC<IStockDetailBodyProps> = props => {
  const renderFound = () => {
    const symbolData = props.symbolData!;
    const quote = symbolData.quote;
    const stats = symbolData.stats;
    const revenueGrowth = calcRevenueGrowth(symbolData);
    const debtRatio = calcDebtRatio(symbolData);
    const grossMargin = calcGrossMargin(symbolData);

    return (
      <Content>
        <StockGraph key={"graph"} data={symbolData} />
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
            type={
              revenueGrowth
                ? revenueGrowth < 0
                  ? "negative"
                  : "positive"
                : undefined
            }
          />
          <StockDetailInfo
            key={"Dividend Yield"}
            title={"Dividend Yield"}
            value={formatPercent(stats.dividendYield)}
            explanation={
              "How much a company pays out in dividends each year relative to its share price."
            }
          />
          <StockDetailInfo
            key={"Ex-Dividend Date"}
            title={"Ex-Dividend Date"}
            value={
              typeof stats.exDividendDate === "number"
                ? "N/A"
                : stats.exDividendDate.substring(0, 10)
            }
            explanation={
              "Investors need to own the stock one day before the ex-dividend date to receive the dividend. Stock price typically drops by the amount of the dividend on the ex-dividend date."
            }
          />
          <StockDetailInfo
            key={"Short Ratio"}
            title={"Short Ratio"}
            value={formatDecimal(stats.shortRatio)}
            explanation={
              "Number of shorted shares divided by average daily trading volume, and it's used to gauge investor sentiment regarding a public company or the market as a whole."
            }
          />
          <StockDetailInfo
            key={"Gross Margin"}
            title={"Gross Margin"}
            value={grossMargin ? decimalToPercent(grossMargin) : "N/A"}
            explanation={
              "Indicator of profitability based on sales and cost of goods"
            }
          />
          <StockDetailInfo
            key={"Debt Ratio"}
            title={"Debt Ratio"}
            value={debtRatio ? formatDecimal(debtRatio) : "N/A"}
            type={
              debtRatio
                ? debtRatio < 0.5
                  ? "negative"
                  : "positive"
                : undefined
            }
            explanation={
              "High ratio indicates more risk and lower financial flexibility"
            }
          />
          <StockDetailInfo
            key={"Return on Equity"}
            title={"Return on Equity"}
            value={formatDecimal(stats.returnOnEquity)}
            type={stats.returnOnEquity < 0.1 ? "negative" : "positive"}
            explanation={
              "Effectiveness of company operations in utilizing investments. High ratio indicates high growth."
            }
          />
          <StockDetailInfo
            key={"Return on Assets"}
            title={"Return on Assets"}
            value={formatDecimal(stats.returnOnAssets)}
            type={stats.returnOnAssets < 0.1 ? "negative" : "positive"}
            explanation={
              "Effectiveness of company operations in utilizing assets. High ratio indicates high growth."
            }
          />
          <StockDetailInfo
            key={"Price to Sales"}
            title={"Price to Sales"}
            value={formatDecimal(stats.priceToSales)}
            explanation={
              "A low ratio may indicate possible undervaluation, while a ratio that is significantly above the average may suggest overvaluation."
            }
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
            type={stats.month1ChangePercent < 0 ? "negative" : "positive"}
          />
          <StockDetailInfo
            key={"Six Month Change"}
            title={"Six Month Change"}
            value={decimalToPercent(stats.month6ChangePercent)}
            type={stats.month6ChangePercent < 0 ? "negative" : "positive"}
          />
          <StockDetailInfo
            key={"One Year Change"}
            title={"One Year Change"}
            value={decimalToPercent(stats.year1ChangePercent)}
            type={stats.year1ChangePercent < 0 ? "negative" : "positive"}
          />
          <StockDetailInfo
            key={"Five Year Change"}
            title={"Five Year Change"}
            value={decimalToPercent(stats.year5ChangePercent)}
            type={stats.year5ChangePercent < 0 ? "negative" : "positive"}
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
            <H3>Press Download Button ...</H3>
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
