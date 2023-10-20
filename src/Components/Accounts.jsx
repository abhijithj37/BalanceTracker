import React from 'react'
import { setBalance, setTotalAccounts, setTotalBalance } from '../app/features/accountSlice';
import { useDispatch, useSelector } from 'react-redux';

const Accounts = () => {
    const { totalAccounts,balance} = useSelector(
        (state) => state.accounts
      );
      const dispatch = useDispatch();
    const handleTotalAccounts = (amount) => {
        if (amount <= 0||!amount) return;
    
        dispatch(setTotalAccounts(amount));
        dispatch(setTotalBalance(amount));
      };
      const handleBalanceChange=(val)=>{
        dispatch(setBalance(val))
      }

  return (
    <div className="w-2/5 space-y-3">
            <h1 className="text-4xl">Accounts</h1>
            Count:{totalAccounts.length}
            <h1 className="font-semibold">Enter Balance</h1>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Amount"
                value={balance}
                onChange={(e) => handleBalanceChange(e.target.value)}
              />
              <button onClick={() => handleTotalAccounts(balance)}>Submit</button>
            </div>
            {totalAccounts.length !== 0 &&
              totalAccounts.map((e, idx) => {
                return <div key={idx}>Balance:{e}</div>;
              })}
          </div>
  )
}

export default Accounts
