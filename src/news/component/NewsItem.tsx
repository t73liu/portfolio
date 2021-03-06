import { Body, ListItem, Text } from "native-base";
import React from "react";

import { openUrl } from "../../util/ajax";
import INewsItem from "../models/INewsItem";

interface INewsDetailProps {
  detail: INewsItem;
}

export const NewsItem: React.SFC<INewsDetailProps> = props => {
  const pressButton = () => {
    openUrl(props.detail.url);
  };

  return (
    <ListItem onPress={pressButton}>
      <Body>
        <Text>{props.detail.headline}</Text>
        <Text note={true}>{props.detail.source}</Text>
      </Body>
    </ListItem>
  );
};
