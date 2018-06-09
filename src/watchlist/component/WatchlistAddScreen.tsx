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
import React, { SFC } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface IInputStyle {
  readonly input: ViewStyle;
}

const styles = StyleSheet.create<IInputStyle>({
  input: {
    marginTop: 5
  }
});

export const WatchlistAddScreen: SFC<NavigationInjectedProps> = props => {
  const onPressBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <Header searchBar={true}>
        <Left>
          <Button transparent={true} onPress={onPressBack}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Watchlist Add Screen</Title>
        </Body>
      </Header>
      <Item rounded={true} style={styles.input}>
        <Input
          placeholder="Add To Do"
          // value={inputValue}
          // onChangeText={this.handleChange}
          // onSubmitEditing={this.handleSearch}
        />
      </Item>
      <Content>
        <Card />
      </Content>
    </Container>
  );
};
