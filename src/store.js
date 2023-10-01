import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./redux/BankSlice";
export const store = configureStore({
    //reducer
    reducer:{
        bank:bankReducer
    }
})