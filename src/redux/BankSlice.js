//createSlice...
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,

}

export const bankSlice = createSlice({

    name: "bank",
    initialState,
    reducers:{
        //action
        deposit:(state,action)=>{
            //state.balance += action.payload
            state.balance = state.balance + action.payload
        },
        withdraw:(state,action)=>{
            state.balance -= action.payload
        }
    }
})
export const {deposit,withdraw} = bankSlice.actions
export default bankSlice.reducer