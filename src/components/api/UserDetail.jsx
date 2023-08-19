import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const [user, setuser] = useState({});
  const [loder, setloder] = useState(false);
  var id = useParams().id;
  const getUserById = async () => {
    try {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id);
      setloder(true);
      console.log(res.data.data);
      setuser(res.data.data);
      setloder(false);
    } catch (err) {}
  };
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div>
      <h1>USER DETAIL</h1>
      {loder ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div className="card" style={{ width: "18rem" }}>
            avatar..
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                EMAIL = {user.email}
              </p>
              <p className="card-text">
                AGE = {user.age}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
