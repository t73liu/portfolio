import React, {Component} from 'react'
import {Content, List} from 'native-base'
import {connect} from 'react-redux';

import NewsDetail from './NewsDetail';
import NewsItem from './NewsItem';
import {StoreState} from '../store/types';

interface NewsScreenProps {
    news: NewsItem[]
}

class NewsScreen extends Component<NewsScreenProps, object> {
    constructor(props: NewsScreenProps) {
        super(props);
    }

    render() {
        const newsItems = this.props.news;
        return (
            <Content>
                <List dataArray={newsItems}
                      renderRow={(item: NewsItem) =>
                          <NewsDetail detail={item}/>
                      }>
                </List>
            </Content>
        );
    }
}

function mapStateToProps(state: StoreState): NewsScreenProps {
    return ({
        news: []
    });
}

export default connect(mapStateToProps)(NewsScreen);
