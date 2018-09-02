import React, { SFC } from "react";
import { NavigationInjectedProps } from "react-navigation";
import IQuote from "../../stock/models/IQuote";
import GeneralTickerItemContainer from "../container/GeneralTickerItemContainer";
import { SymbolText } from "./SymbolText";

export interface ISymbolItemOwnProps {
  ticker: string;
}

export interface ISymbolItemStateProps {
  quote?: IQuote;
  name: string;
}

export type ISymbolItemProps = ISymbolItemOwnProps &
  ISymbolItemStateProps &
  NavigationInjectedProps;

export const SymbolItem: SFC<ISymbolItemProps> = props => {
  return (
    <GeneralTickerItemContainer
      ticker={props.ticker}
      body={<SymbolText {...props} />}
      navigation={props.navigation}
    />
  );
};
