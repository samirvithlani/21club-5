import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FilterData = () => {
  const [users, setusers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getFilterData = async (data) => {
    let keyForsend = {};
    for (let key in data) {
      if (data[key] !== "") {
        keyForsend[key] = data[key];
      }
    }
    console.log("kfs", keyForsend);

    console.log(data);
    const res = await axios.get("https://node5.onrender.com/user/filter2", {
      params: keyForsend,
    });
    setusers(res.data.data);
    console.log(res.data.data);
  };

  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(getFilterData)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            {...register("age")}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">age</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user._id}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.isActive ? "ACTIVE" : "NOT ACTIVE"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
