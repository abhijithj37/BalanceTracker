import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTimeSeries,
  setTotalAccounts,
  setTotalBalance,
} from "./app/features/accountSlice";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState();

  const [balance, setBalance] = useState();
  const { totalBalance, totalAccounts, timeSeries } = useSelector(
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
  const handleTotalAccounts = (amount) => {
    if (amount <= 0) return;

    dispatch(setTotalAccounts(amount));
    dispatch(setTotalBalance(amount));
  };
  

  return (
    <>
      <main className="flex p-20 px-25">
        <div className="w-2/5 space-y-3">
          <h1 className="text-4xl">Accounts</h1>
          Count:{totalAccounts.length}
          <h1 className="font-semibold">Enter Balance</h1>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Amount"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <button onClick={() => handleTotalAccounts(balance)}>Submit</button>
          </div>
          {totalAccounts.length !== 0 &&
            totalAccounts.map((e, idx) => {
              return <div key={idx}>Balance:{e}</div>;
            })}
        </div>

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
                setMonthlyPayment(e.target.value);

                calculateRepayment(e.target.value);
              }}
              placeholder="Enter your monthly payement"
            />
          </div>
          {/* Chart */}
          <div className="pt-5">
            <h1 className=" text-lg font-bold">Balances over time</h1>
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
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
