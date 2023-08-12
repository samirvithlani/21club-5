import axios from "axios";
import React, { useEffect } from "react";

export const ApiDemo2 = () => {
  const getWeaterData = async () => {
    const res = await axios.get(
      "https://forecast9.p.rapidapi.com/rapidapi/forecast/Mumbai/summary/",
      {
        headers: {
          "X-RapidAPI-Key":"2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
          "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
        },
      }
    );
    console.log(res);
  };
  useEffect(() => {
    
    getWeaterData();
    
  }, [])
  
  return <div>ApiDemo2</div>;
};
