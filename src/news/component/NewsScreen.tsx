import { Content, List } from "native-base";
import React, { SFC } from "react";
import INewsItem from "../models/INewsItem";
import { NewsDetail } from "./NewsDetail";

export interface INewsScreenProps {
  news: INewsItem[];
}

export const NewsScreen: SFC<INewsScreenProps> = props => {
  return (
    <Content>
      <List>
        {props.news.map(item => (
          <NewsDetail key={item.headline} detail={item} />
        ))}
      </List>
    </Content>
  );
};
