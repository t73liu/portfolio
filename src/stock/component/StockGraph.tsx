import { Card, CardItem, Content, Form, Picker, Text } from "native-base";
import * as R from "rambda";
import React, { Component } from "react";
import { Dimensions } from "react-native";
import { BarChart, YAxis } from "react-native-svg-charts";
import ISymbolChart from "../models/ISymbolChart";
import ISymbolData from "../models/ISymbolData";

type ChartTypes = "one-month" | "three-month" | "six-month" | "one-year";

function formatChartData(chart: ISymbolChart[], type: ChartTypes) {
  return R.takeLast(
    getRecordCountForChart(type),
    R.map(val => val.close, chart)
  );
}

function getRecordCountForChart(type: ChartTypes): number {
  switch (type) {
    case "one-month":
      return 21;
    case "three-month":
      return 63;
    case "six-month":
      return 126;
    case "one-year":
      return 252;
  }
}

interface IStockGraphProps {
  data: ISymbolData;
}

interface IStockGraphState {
  readonly chartType: ChartTypes;
}

export default class StockGraph extends Component<
  IStockGraphProps,
  IStockGraphState
> {
  public readonly state: IStockGraphState = {
    chartType: "one-month"
  };

  constructor(props: IStockGraphProps) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  public render() {
    if (this.props.data.chart) {
      return this.renderFound();
    } else {
      return this.renderNotFound();
    }
  }

  private renderFound() {
    const chart = formatChartData(this.props.data.chart, this.state.chartType);
    const color = this.getChartColor(chart);
    return (
      <Content>
        <Card>
          <CardItem key={"graph-header"} bordered={true}>
            <Content>
              <Form>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.chartType}
                  onValueChange={this.onValueChange}
                >
                  <Picker.Item label="One Month" value="one-month" />
                  <Picker.Item label="Three Month" value="three-month" />
                  <Picker.Item label="Six Month" value="six-month" />
                  <Picker.Item label="One Year" value="one-year" />
                </Picker>
              </Form>
            </Content>
          </CardItem>
          <CardItem key={"graph-body"} bordered={true}>
            <YAxis
              data={chart}
              svg={{
                fill: "black",
                fontSize: 10
              }}
              contentInset={{ top: 30, bottom: 30 }}
              numberOfTicks={10}
              style={{
                height: Dimensions.get("window").width * 0.6,
                flex: 1
              }}
            />
            <BarChart
              data={chart}
              svg={{ fill: color }}
              contentInset={{ top: 30, bottom: 30, left: 30 }}
              numberOfTicks={10}
              style={{
                height: Dimensions.get("window").width * 0.6,
                width: Dimensions.get("window").width * 0.6,
                flex: 9
              }}
            />
          </CardItem>
        </Card>
      </Content>
    );
  }

  private getChartColor(chart: number[]): string {
    if (chart.length <= 1) {
      return "black";
    }
    return chart[0] < chart[chart.length - 1] ? "green" : "red";
  }

  private onValueChange(type: ChartTypes) {
    this.setState({
      chartType: type
    });
  }

  private renderNotFound() {
    return (
      <Content>
        <Card>
          <CardItem key={"graph-header"} header={true} bordered={true}>
            <Text>No Chart Data Available</Text>
          </CardItem>
          <CardItem key={"graph-body"} bordered={true}>
            <Text>Please download chart data.</Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
