 
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyPayment } from "../app/features/accountSlice";
import BalanceChart from "./BalanceChart";
 
function RepaymentModel() {
  const { totalBalance, timeSeries, monthlyPayment } = useSelector(
    (state) => state.accounts
  );
  const dispatch = useDispatch();

  const handleMonthlyPaymentChange = (val) => {
    dispatch(setMonthlyPayment(val));
  };

 
  return (
  
  
        <div className=" w-3/5 space-y-5">
          <h1 className="text-2xl font-semibold">
            Initial balance :{totalBalance}
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-light">Monthly Payment</h1>
            <input
              value={monthlyPayment}
              type="number"
              onChange={(e) => {
                handleMonthlyPaymentChange(e.target.value);
              }}
              placeholder="Enter your monthly payement"
            />
          </div>
           <div className="pt-5">
            <h1 className=" text-lg font-bold">Balances over time</h1>
             
            <BalanceChart timeSeries={timeSeries}/>
          </div>
        </div>
      
  );
}

export default RepaymentModel;
