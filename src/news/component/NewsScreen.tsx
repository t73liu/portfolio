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
import { NewsDetail } from "./NewsDetail";

export interface INewsScreenProps {
  news: INewsItem[];
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
        <List>
          {props.news.map(item => (
            <NewsDetail key={item.headline} detail={item} />
          ))}
        </List>
      </Content>
    </Container>
  );
};
