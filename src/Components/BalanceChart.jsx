import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { useCalculate } from "../Utils/helper";

const BalanceChart = ({ timeSeries }) => {
  useCalculate();
  return (
    <div data-testid="balance-chart">
      <LineChart
        width={650}
        height={350}
        data={timeSeries}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="month">
            <Label value="No of Months" position='insideBottom'></Label>
        </XAxis>
        <YAxis>

        </YAxis>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <Tooltip />
        <Line type="monotone" dataKey="balance" stroke="#8884d8"></Line>
      </LineChart>
    </div>
  );
};

export default BalanceChart;
