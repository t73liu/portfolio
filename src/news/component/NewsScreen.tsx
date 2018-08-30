import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title
} from "native-base";
import React, { SFC } from "react";
import { CodeButton } from "../../common/component/CodeButton";
import RefreshAllButtonContainer from "../../stock/container/RefreshAllButtonContainer";
import INewsItem from "../models/INewsItem";
import { NewsList } from "./NewsList";

export interface ITickerNews {
  ticker: string;
  news: INewsItem[];
}

export interface INewsScreenProps {
  tickerNewsList: ITickerNews[];
}

export const NewsScreen: SFC<INewsScreenProps> = props => {
  return (
    <Container>
      <Header>
        <Left>
          <CodeButton />
        </Left>
        <Body>
          <Title>News</Title>
        </Body>
        <Right>
          <RefreshAllButtonContainer />
        </Right>
      </Header>
      <Content>
        {props.tickerNewsList.map(item => (
          <NewsList key={item.ticker} tickerNews={item} />
        ))}
      </Content>
    </Container>
  );
};
