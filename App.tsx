import * as Expo from 'expo';
import * as React from 'react';

import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title} from 'native-base';

import {StyleSheet, StatusBar, ViewStyle, View} from 'react-native'

interface AppProperties {
}

interface AppState {
    loading: boolean
}

export default class App extends React.Component<AppProperties, AppState> {
    constructor(props: AppProperties) {
        super(props);
        this.state = {
            loading: true
        };
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading/>;
        }
        return (
            <View style={styles.container}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Main Screen</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <Text>
                            Some Content
                        </Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Button</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </View>
        );
    }
}

interface Style {
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    }
});