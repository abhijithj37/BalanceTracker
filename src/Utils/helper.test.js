import { describe, it } from "vitest";
import { useCalculate } from "./helper";
import store from "../app/store";
import {
  setMonthlyPayment,
  setTotalBalance,
} from "../app/features/accountSlice";
import { renderHook } from "@testing-library/react";
import TestProvider from "../wrapper/TestProvider";

describe("useCalculate custom hook", (test) => {
  it("should update time series correctly", () => {
    store.dispatch(setTotalBalance(5000));
    store.dispatch(setMonthlyPayment(500));

    const { result } = renderHook(() => useCalculate(), {
      wrapper: TestProvider,
    });

    result.current.calculateRepayment();

    const state = store.getState();

    expect(state.accounts.timeSeries).to.be.an("array");
  });
});
