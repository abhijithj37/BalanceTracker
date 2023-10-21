import { useDispatch, useSelector } from "react-redux";
import { setTimeSeries } from "../app/features/accountSlice";
import { useEffect } from "react";

 export const useCalculate=()=>{
    const { totalBalance ,monthlyPayment} = useSelector(
        (state) => state.accounts
      );
      const dispatch = useDispatch();
    
      const calculateRepayment = (monthlyPayment) => {
        if (monthlyPayment <= 0 || !totalBalance)
          return dispatch(setTimeSeries([]));
    
        const months = [];
        let balance = totalBalance;
    
        let month = 0;
        while (balance > 0) {
          months.push({ month, balance });
          balance -= monthlyPayment;
          if (balance < 0) balance = 0;
          month++;
        }
        months.push({ month: months.length, balance });
    
        dispatch(setTimeSeries(months));
      };

      useEffect(()=>{
        calculateRepayment(monthlyPayment)
          },[totalBalance,monthlyPayment])

          return {calculateRepayment}
 }