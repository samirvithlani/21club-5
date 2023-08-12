import React, { useEffect, useState } from "react";

export const Counter = () => {
    const [no, setno] = useState(0)
  useEffect(() => {
    console.log("useEffect");
  }, [no]);

  return <div>Counter
        <h1>{no}</h1> 
        <button onClick={()=>{setno(no+1)}}>+</button>

  </div>;
};
