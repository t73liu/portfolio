import { Content, List } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";

import { IStoreState } from "../store/types";
import INewsItem from "./INewsItem";
import { NewsDetail } from "./NewsDetail";

interface INewsScreenProps {
  news: INewsItem[];
}

class NewsScreen extends Component<INewsScreenProps, object> {
  constructor(props: INewsScreenProps) {
    super(props);
  }

  public render() {
    const newsItems = this.props.news;
    return (
      <Content>
        <List>
          {newsItems.map(item => (
            <NewsDetail key={item.headline} detail={item} />
          ))}
        </List>
      </Content>
    );
  }
}

function mapStateToProps(state: IStoreState): INewsScreenProps {
  return {
    news: []
  };
}

export default connect(mapStateToProps)(NewsScreen);
