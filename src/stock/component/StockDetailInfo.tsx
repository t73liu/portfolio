import { Left, ListItem, Text, Toast } from "native-base";
import React, { SFC } from "react";
import { profitLossStyle } from "../../common/models/IProfitLossStyle";
import { truncateString } from "../../util/functions";

interface IStockDetailInfoProps {
  title: string;
  value: string;
  explanation?: string;
  type?: "negative" | "positive";
}

export const StockDetailInfo: SFC<IStockDetailInfoProps> = props => {
  const onPressButton = () => {
    if (props.explanation) {
      Toast.show({
        text: `${props.explanation}`,
        duration: 3000
      });
    }
  };

  const onLongPress = () => {
    Toast.show({
      text: `${props.value}`
    });
  };

  const style = props.type
    ? props.type === "negative"
      ? profitLossStyle.loss
      : profitLossStyle.profit
    : {};

  return (
    <ListItem
      key={props.title}
      onPress={onPressButton}
      onLongPress={onLongPress}
    >
      <Left>
        <Text style={style}>{props.title}</Text>
      </Left>
      <Text style={style}>{truncateString(props.value)}</Text>
    </ListItem>
  );
};
