import axios from "axios";
import React, { useEffect } from "react";

export const APiDemo4 = () => {
  const getData = async () => {
    try{
    const res = await axios.get("http://localhost:3001/api/employee",{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
    });
    console.log(res.data);
  }
  catch(err){
    console.log(err);
  }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>TOKE EXAMPLE.....</h1>
    </div>
  );
};
