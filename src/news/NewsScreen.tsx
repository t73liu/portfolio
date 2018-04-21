import React, {Component} from 'react'
import {Content, List as ListComponent} from 'native-base'
import {connect} from 'react-redux';
import {List} from "immutable";

import NewsDetail from './NewsDetail';
import NewsItem from './NewsItem';
import {StoreState} from '../store/types';

interface NewsScreenProps {
    news: List<NewsItem>
}

class NewsScreen extends Component<NewsScreenProps, object> {
    constructor(props: NewsScreenProps) {
        super(props);
    }

    render() {
        const newsItems = this.props.news;
        return (
            <Content>
                <ListComponent dataArray={newsItems.toJS()}
                               renderRow={(item: NewsItem) =>
                          <NewsDetail detail={item}/>
                      }>
                </ListComponent>
            </Content>
        );
    }
}

function mapStateToProps(state: StoreState): NewsScreenProps {
    return ({
        news: List()
    });
}

export default connect(mapStateToProps)(NewsScreen);
