import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { deposit,withdraw } from "../../redux/BankSlice";

export const TrasnsAction = () => {
  const [amount, setamount] = useState(0);
  //replace useState with useDispatch
  const  dispatch = useDispatch();

  const {register,handleSubmit,formState:{errors}} = useForm();


  const depositHandler = (data) => {
    console.log(data);
    //dispatch(deposit(data?.amount))
    const depositAmount = parseInt(data?.amount);
    //dispatch(deposit(Number(data?.amount)))
    dispatch(deposit(depositAmount))
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(depositHandler)}>
        <div>
          <input
            type="number"
            placeholder="Enter Amount"
            {...register("amount")}
          />
        </div>
        <div>
          <button type="submit">Deposit</button>
        </div>
      </form>
    </div>
  );
};
