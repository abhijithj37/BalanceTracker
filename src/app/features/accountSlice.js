import { createSlice } from "@reduxjs/toolkit"


const initialState={
totalBalance:0,
totalAccounts:[],
timeSeries:[],
balance:undefined,
monthlyPayment:undefined
}

const accountSlice=createSlice({
    name:'accounts',
    initialState,
    reducers:{
        setTotalBalance:(state,action)=>{
            state.totalBalance=state.totalBalance+(+action.payload)
        },
        setTotalAccounts:(state,action)=>{
            state.totalAccounts=[...state.totalAccounts,action.payload]
        },
        setTimeSeries:(state,action)=>{
            state.timeSeries=action.payload
        },
        setMonthlyPayment:(state,action)=>{
            state.monthlyPayment=action.payload
        },
        setBalance:(state,action)=>{
            state.balance=action.payload
        }
    }
})

export default accountSlice.reducer
export const {setTotalAccounts,setTimeSeries,setTotalBalance,setBalance,setMonthlyPayment} =accountSlice.actions