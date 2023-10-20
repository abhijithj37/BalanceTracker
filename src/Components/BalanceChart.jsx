import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
import { useCalculate } from '../Utils/helper';

const BalanceChart = ({timeSeries}) => {
    useCalculate()
  return (
    <div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={timeSeries}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="month"></XAxis>
                  <YAxis></YAxis>
                  <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    stroke="#8884d8"
                  ></Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
  )
}

export default BalanceChart
