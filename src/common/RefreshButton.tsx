import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Body, Button, Spinner, Text} from 'native-base';

import {StoreState} from '../store/types';

interface RefreshButtonProps {
    isRefreshing: boolean
    lastUpdated: string
}

class RefreshButton extends Component<RefreshButtonProps> {
    constructor(props: RefreshButtonProps) {
        super(props);
    }

    render() {
        const time = this.props.lastUpdated;
        return this.props.isRefreshing ?
            (<Body><Spinner/></Body>) :
            (<Button>
                <Text>
                    Refresh Data
                </Text>
                <Text note>
                    {time}
                </Text>
            </Button>);
    }
}

function mapStateToProps(state: StoreState): RefreshButtonProps {
    return ({
        isRefreshing: false,
        lastUpdated: "2016-10-31 15:00:23"
    });
}

export default connect(mapStateToProps)(RefreshButton);
