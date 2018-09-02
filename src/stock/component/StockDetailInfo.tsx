import { Left, ListItem, Text, Toast } from "native-base";
import React, { SFC } from "react";
import { profitLossStyle } from "../../common/models/IProfitLossStyle";

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
        text: `Info: ${props.explanation}`,
        buttonText: "Dismiss",
        type: "success"
      });
    }
  };

  const style = props.type
    ? props.type === "negative"
      ? profitLossStyle.loss
      : profitLossStyle.profit
    : {};

  return (
    <ListItem key={props.title} onPress={onPressButton}>
      <Left>
        <Text style={style}>{props.title}</Text>
      </Left>
      <Text style={style}>{props.value}</Text>
    </ListItem>
  );
};
