import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [loader, setloader] = useState(true)
  const getData = async () => {
    try {
      const res = await axios.get("https://node5.onrender.com/user/user");
      console.log(res.status);
      console.log(res.data.data);
      setusers(res.data.data);

      if(res?.data?.data?.length > 0){
        setloader(false)
      }

    } catch (err) {
      alert("no data found...");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {

    // const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
    if(res.status === 204){
        
        getData()
    }

  }
  return <div>ApiDemo1
    {
        loader? <h1>loading...</h1> : null
    }
    <table className="table table-dark">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>age</th>
                <th>ACTION</th>
                </tr>
        </thead>
        <tbody>
            {
                users?.map((user)=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <button onClick={()=>{deleteData(user._id)}} className="btn btn-danger">DELEET</button>
                            <Link to={`/userdetail/${user._id}`} className="btn btn-primary">DETAIL</Link>
                            <Link to={`/userupdate/${user._id}`} className="btn btn-info">update</Link>
                        </td>
                    </tr>
                })
            }
            </tbody>

    </table>
  </div>;
};
