import { createSlice } from "@reduxjs/toolkit"


const initialState={
totalBalance:0,
totalAccounts:[],
timeSeries:[]
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
        }
    }
})

export default accountSlice.reducer
export const {setTotalAccounts,setTimeSeries,setTotalBalance} =accountSlice.actions