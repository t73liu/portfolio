import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  Right,
  Title
} from "native-base";
import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import { CodeButton } from "../../common/component/CodeButton";
import RefreshAllButtonContainer from "../../stock/container/RefreshAllButtonContainer";
import SymbolItemContainer from "../../symbols/container/SymbolItemContainer";

export interface IWatchlistStateProps {
  tickers: string[];
}

type IWatchlistProps = IWatchlistStateProps & NavigationInjectedProps;

export const WatchlistScreen: SFC<IWatchlistProps> = props => {
  const onPressAdd = () => {
    props.navigation.navigate("SymbolLookup");
  };

  return (
    <Container>
      <Header>
        <Left>
          <CodeButton />
        </Left>
        <Body>
          <Title>Watchlist</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={onPressAdd}>
            <Icon name="search" />
          </Button>
          <RefreshAllButtonContainer />
        </Right>
      </Header>
      <Content>
        <List>
          {props.tickers.map(ticker => (
            <SymbolItemContainer
              key={ticker}
              ticker={ticker}
              navigation={props.navigation}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
};
