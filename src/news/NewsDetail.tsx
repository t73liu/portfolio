import {Body, ListItem, Text} from 'native-base';
import React, {Component} from 'react';

import NewsItem from './NewsItem';
import {openUrl} from '../util/ajax';

interface NewsDetailProps {
    detail: NewsItem
}

export default class NewsDetail extends Component<NewsDetailProps, object> {
    constructor(props: NewsDetailProps) {
        super(props);
    }

    render() {
        return (
            <ListItem onPress={() => {
                openUrl(this.props.detail.url)
            }}>
                <Body>
                <Text>{this.props.detail.headline}</Text>
                <Text note>{this.props.detail.source}</Text>
                </Body>
            </ListItem>
        );
    }
}
