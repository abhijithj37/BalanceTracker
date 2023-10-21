import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "../app/store";

describe("Home", () => {
  it("Should have the Accounts and RepaymentModel component", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId("accounts-component")).toBeInTheDocument();
    expect(screen.getByTestId("repayment-model")).toBeInTheDocument();

  });

  
});
  