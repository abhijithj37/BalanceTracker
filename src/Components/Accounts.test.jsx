import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Accounts from "./Accounts";
import { Provider } from "react-redux";
import store from "../app/store";

describe("Accounts", () => {
   

  it("Should handle balance input change", () => {
    render(
      <Provider store={store}>
        <Accounts />
      </Provider>
    );

    const balanceInput = screen.getByPlaceholderText("Amount");
    fireEvent.change(balanceInput, { target: { value: "1000" } });

    expect(balanceInput.value).toBe("1000");

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);


    const state = store.getState();

    expect(state.accounts.totalAccounts).toHaveLength(1);  
    expect(state.accounts.totalBalance).toBe(1000);  
  });

  

  
});
