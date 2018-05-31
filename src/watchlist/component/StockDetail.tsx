import { Body, Button, Icon, ListItem, Right, Text } from "native-base";
import React, { SFC } from "react";

import { IQuote } from "../../types";

export interface IStockDetailProps {
  ticker: string;
  quote?: IQuote;
  deleteTicker: (ticker: string) => any;
}

export const StockDetail: SFC<IStockDetailProps> = props => {
  const handleButtonPress = () => {
    props.deleteTicker(props.ticker);
  };

  return (
    <ListItem>
      <Body>
        <Text>{props.ticker}</Text>
        <Text note={true}>
          {typeof props.quote === "undefined"
            ? "Please Refresh"
            : props.quote!.ytdChange}
        </Text>
      </Body>
      <Right>
        <Button dark={true} transparent={true} onPress={handleButtonPress}>
          <Icon name="trash" />
        </Button>
      </Right>
    </ListItem>
  );
};
