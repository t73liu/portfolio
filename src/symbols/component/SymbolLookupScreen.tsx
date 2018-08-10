import {
  Body,
  Button,
  Card,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Left,
  List,
  Title
} from "native-base";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import SymbolItemContainer from "../container/SymbolItemContainer";
import ISymbolName from "../models/ISymbolName";

interface IInputStyle {
  readonly input: ViewStyle;
}

const styles = StyleSheet.create<IInputStyle>({
  input: {
    marginTop: 5
  }
});

interface ISymbolLookupStateProps {
  searchResult: ISymbolName[];
}

interface ISymbolLookupDispatchProps {
  search: (query: string) => any;
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
            {this.props.searchResult.map(name => (
              <SymbolItemContainer
                key={name.symbol}
                ticker={name.symbol}
                navigation={this.props.navigation}
              />
            ))}
          </List>
        </Content>
      </Container>
    );
  }

  private onPressBack = () => {
    this.props.navigation.goBack();
  };

  private handleChange = (text: string) => {
    this.setState({
      inputValue: text
    });
  };

  private handleSearch = () => {
    this.props.search(this.state.inputValue.toUpperCase());
    this.setState({
      inputValue: ""
    });
  };
}
