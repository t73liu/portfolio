import {
  Body,
  Button,
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
  const onPressRefresh = () => {
    Toast.show({
      text: "Disabled Refresh",
      buttonText: "Dismiss"
    });
  };

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>News</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressRefresh}>
            <Icon name="refresh" />
          </Button>
        </Right>
      </Header>
      <Content>
        {props.tickerNewsList.map(item => (
          <NewsList key={item.ticker} tickerNews={item}/>
        ))}
      </Content>
    </Container>
  );
};
