import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Left,
  List,
  Right,
  Title,
  Toast
} from "native-base";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import SymbolItemContainer from "../container/SymbolItemContainer";

interface IInputStyle {
  readonly input: ViewStyle;
}

const styles = StyleSheet.create<IInputStyle>({
  input: {
    marginTop: 5
  }
});

export interface ISymbolLookupStateProps {
  searchResult: string[];
}

export interface ISymbolLookupDispatchProps {
  search: (query: string) => any;
  downloadTickers: () => any;
}

type ISymbolLookupProps = ISymbolLookupStateProps &
  ISymbolLookupDispatchProps &
  NavigationInjectedProps;

interface ISymbolLookupState {
  inputValue: string;
}

export default class SymbolLookupScreen extends React.Component<
  ISymbolLookupProps,
  ISymbolLookupState
> {
  public readonly state: ISymbolLookupState = {
    inputValue: ""
  };

  public render() {
    const { inputValue } = this.state;

    return (
      <Container>
        <Header searchBar={true}>
          <Left>
            <Button transparent={true} onPress={this.onPressBack}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Ticker Lookup</Title>
          </Body>
          <Right>
            <Button
              transparent={true}
              onPress={this.onPressDownload}
              onLongPress={this.onLongPress}
            >
              <Icon name="download" />
            </Button>
          </Right>
        </Header>
        <Item rounded={true} style={styles.input}>
          <Input
            placeholder="Search Ticker"
            value={inputValue}
            onChangeText={this.handleChange}
            onSubmitEditing={this.handleSearch}
          />
        </Item>
        <Content>
          <List>
            {this.props.searchResult.map(symbol => (
              <SymbolItemContainer
                key={symbol}
                ticker={symbol}
                navigation={this.props.navigation}
              />
            ))}
          </List>
        </Content>
      </Container>
    );
  }

  private onPressBack = () => {
    this.props.navigation.pop();
  };

  private onPressDownload = () => {
    this.props.downloadTickers();
  };

  private onLongPress = () => {
    Toast.show({
      text: "Downloading Ticker List"
    });
  };

  private handleChange = (text: string) => {
    this.setState({
      inputValue: text
    });
  };

  private handleSearch = () => {
    this.props.search(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };
}
