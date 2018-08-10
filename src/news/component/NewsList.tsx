import { Body, List, ListItem, Text } from "native-base";
import React from "react";
import { NewsItem } from "./NewsItem";
import { ITickerNews } from "./NewsScreen";

interface INewsListProps {
  tickerNews: ITickerNews;
}

export const NewsList: React.SFC<INewsListProps> = props => {
  return (
    <List>
      <ListItem key={props.tickerNews.ticker} itemDivider={true}>
        <Text>{props.tickerNews.ticker}</Text>
      </ListItem>
      {props.tickerNews.news.map(item => (
        <NewsItem key={item.url} detail={item}/>
      ))}
    </List>
  );
};
