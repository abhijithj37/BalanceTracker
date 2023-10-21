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
    <div className="w-2/5  flex flex-col  items-center" data-testid="accounts-component">
        <div className='space-y-3'>

        
            <h1 className="text-4xl">Accounts</h1>
            <h1 className='font-semibold'>Count {totalAccounts.length}</h1>
             
            <h1 className= "text-xl font-light">Enter Balance</h1>
            <div className="flex gap-2">
              <input
              class="rounded-md px-4 py-1 border border-gray-400 placeholder:text-gray-400"
                type="number"
                placeholder="Amount"
                value={balance}
                onChange={(e) => handleBalanceChange(e.target.value)}
              />
              <button className='bg-blue-500 rounded-md px-4 py-1 text-white font-medium' onClick={() => handleTotalAccounts(balance)}>Submit</button>
            </div>
            {totalAccounts.length !== 0 &&
              totalAccounts.map((e, idx) => {
                return <div className='rounded-md px-4 py-1 border border-gray-200 flex  justify-between' key={idx}>
                     <span className='text-gray-400'>
                        Bal
                    </span>
                    <span>{e}</span>
                    </div>;
              })}
          </div>
          </div>
  )
}

export default Accounts
