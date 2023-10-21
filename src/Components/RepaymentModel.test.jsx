import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
 import RepaymentModel from "./RepaymentModel";
import store from "../app/store";

describe("RepaymentModel", () => {
  it("Should have Balance chart and handle monthly payment change", () => {
    render(
      <Provider store={store}>
        <RepaymentModel />
      </Provider>
    );
    const balanceChart = screen.getByTestId("balance-chart");

     expect(balanceChart).toBeInTheDocument();

     const monthlyPaymentInput = screen.getByPlaceholderText("monthly payment");

     fireEvent.change(monthlyPaymentInput, { target: { value: "500" } });

     expect(monthlyPaymentInput.value).toBe("500");

   });

   

 
});
