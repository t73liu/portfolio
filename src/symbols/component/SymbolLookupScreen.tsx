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
  Title
} from "native-base";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import ISymbolName from "../models/ISymbolName";

interface IInputStyle {
  readonly input: ViewStyle;
}

const styles = StyleSheet.create<IInputStyle>({
  input: {
    marginTop: 5
  }
});

interface ISymbolLookupState {
  inputValue: string;
  searchResult: ISymbolName[];
}

export default class SymbolLookupScreen extends React.Component<NavigationInjectedProps,
  ISymbolLookupState> {
  public readonly state: ISymbolLookupState = {
    inputValue: "",
    searchResult: []
  };

  public render() {
    const { inputValue } = this.state;

    return (
      <Container>
        <Header searchBar={true}>
          <Left>
            <Button transparent={true} onPress={this.onPressBack}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Ticker Lookup Screen</Title>
          </Body>
        </Header>
        <Item rounded={true} style={styles.input}>
          <Input
            placeholder="Add To Do"
            value={inputValue}
            onChangeText={this.handleChange}
            onSubmitEditing={this.handleSearch}
          />
        </Item>
        <Content>
          <Card/>
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
    this.setState({
      // searchResult: this.props.search(this.state.inputValue);
      ...this.state
    });
  };
}
