import { Button, Form, Input, Item, Label, Text, Toast } from "native-base";
import React, { Component } from "react";
import {
  validatePositiveFloat,
  validatePositiveInteger
} from "../../util/functions";
import IHolding from "../models/IHolding";

interface IPositionEditFormState {
  amount: string;
  price: string;
}

export interface IPositionEditFormOwnProps {
  position: IHolding;
}

export interface IPositionEditFormDispatchProps {
  savePosition: (position: IHolding) => void;
  deletePosition: (id: string) => void;
}

type IPositionEditFormProps = IPositionEditFormOwnProps &
  IPositionEditFormDispatchProps;

export default class PositionEditForm extends Component<
  IPositionEditFormProps,
  IPositionEditFormState
> {
  public readonly state: IPositionEditFormState = {
    amount: this.props.position.amount.toString(),
    price: this.props.position.buyPrice.toString()
  };

  public render() {
    const amount = this.state.amount;
    const price = this.state.price;
    return (
      <Form>
        <Item floatingLabel={true}>
          <Label>Amount</Label>
          <Input
            keyboardType={"numeric"}
            placeholder="Amount Bought"
            value={amount}
            onChangeText={this.handleAmountChange}
          />
        </Item>
        <Item floatingLabel={true} last={true}>
          <Label>Price</Label>
          <Input
            keyboardType={"numeric"}
            placeholder="Book Price of Ticker"
            value={price}
            onChangeText={this.handlePriceChange}
          />
        </Item>
        <Button block={true} success={true} onPress={this.onPressSave}>
          <Text>Save</Text>
        </Button>
        <Button block={true} danger={true} onPress={this.onPressDelete}>
          <Text>Delete</Text>
        </Button>
      </Form>
    );
  }

  private handleAmountChange = (input: string) => {
    this.setState({
      amount: input,
      price: this.state.price
    });
  };

  private handlePriceChange = (input: string) => {
    this.setState({
      price: input,
      amount: this.state.amount
    });
  };

  private onPressSave = () => {
    if (!validatePositiveInteger(this.state.amount)) {
      Toast.show({
        text: "Invalid format for amount. Please provide positive integer.",
        type: "warning",
        duration: 3000
      });
    } else if (!validatePositiveFloat(this.state.price)) {
      Toast.show({
        text: "Invalid format for price. Please provide positive real number.",
        type: "warning",
        duration: 3000
      });
    } else {
      const newAmount = parseInt(this.state.amount, 10);
      const newPrice = parseFloat(this.state.price);
      const position: IHolding = {
        id: this.props.position.id,
        ticker: this.props.position.ticker,
        amount: newAmount,
        buyPrice: newPrice
      };
      this.props.savePosition(position);
      this.setState({
        amount: newAmount.toString(),
        price: newPrice.toString()
      });
    }
  };

  private onPressDelete = () => {
    this.props.deletePosition(this.props.position.id);
  };
}
