import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BalanceChart from "./BalanceChart";
 
import { Provider } from "react-redux";
import store from "../app/store";

describe("BalanceChart", () => {
  it("Should render a line chart with the provided timeSeries data", () => {
    const timeSeriesData = [
      { month: 1, balance: 100 },
      { month: 2, balance: 200 },
      { month: 3, balance: 150 },
     ];

    render(<Provider store={store}><BalanceChart timeSeries={timeSeriesData} /></Provider> );

     
  });
});
