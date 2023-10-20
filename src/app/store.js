import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./features/accountSlice";


const store=configureStore({
    reducer:{
        accounts:accountSlice
    }
})
export default store