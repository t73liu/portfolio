import React, {Component} from 'react'
import {Content, List} from 'native-base'
import {RefreshControl} from "react-native";
import NewsDetail from "./NewsDetail";
import NewsItem from "./NewsItem";
import {getNews} from "../util/ajax";

interface NewsState {
    news: NewsItem[]
    refreshing: boolean
}

const initialState = {
    news: [],
    refreshing: false
};

export default class NewsScreen extends Component<object, NewsState> {
    readonly state = initialState;

    refreshNews(): void {
        this.setState((prevState: NewsState) => ({
            refreshing: true,
            ...prevState
        }));
        getNews("amzn").then(value => {
            this.setState({
                refreshing: false,
                news: value
            });
        }).catch(reason => {
            console.log(reason);
            this.setState((prevState: NewsState) => ({
                refreshing: false,
                ...prevState
            }))
        });
    }

    render() {
        const newsItems = this.state.news;
        return (
            <Content
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.refreshNews.bind(this)}/>
                }>
                <List dataArray={newsItems}
                      renderRow={(item: NewsItem) =>
                          <NewsDetail detail={item}/>
                      }>
                </List>
            </Content>
        );
    }
}
