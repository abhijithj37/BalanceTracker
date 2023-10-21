 
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
  
  
        <div className=" w-3/5 space-y-4 flex flex-col justify-center items-center" data-testid="repayment-model">
                    <div className="flex flex-col gap-2">

          <h1 className="text-4xl">
            Initial balance = {totalBalance}
          </h1>
             <h1 className="text-xl font-light mt-2">Monthly Payment</h1>
            <input
            class="rounded-md px-4 py-1  border border-gray-400 placeholder:text-gray-400"
              value={monthlyPayment}
              type="number"
              onChange={(e) => {
                handleMonthlyPaymentChange(e.target.value);
              }}
              placeholder="monthly payment"
            />
          </div>
           <div className="pt-5 flex  flex-col justify-center items-center gap-2">
            <h1 className=" text-lg font-semibold text-violet-500 text-center">Balances over time</h1>
             
            <BalanceChart timeSeries={timeSeries}/>
          </div>
        </div>
      
  );
}

export default RepaymentModel;
