import { StyleSheet, TextStyle } from "react-native";

interface IProfitLossStyle {
  readonly profit: TextStyle;
  readonly loss: TextStyle;
}

export const profitLossStyle = StyleSheet.create<IProfitLossStyle>({
  profit: {
    color: "green"
  },
  loss: {
    color: "red"
  }
});
