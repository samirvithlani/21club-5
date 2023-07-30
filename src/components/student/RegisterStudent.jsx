import React, { useState } from "react";

export const RegisterStudent = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [country, setcountry] = useState("");
  const [hobbies, sethobbies] = useState([])
  const nameHandler = (e) => {
    console.log(e.target.value);
    setname(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault(); //to prevent page refresh ,action
    console.log("name", name);
    console.log("email", email);
    console.log("gender", gender);
    console.log("country", country);
    console.log("hobbies", hobbies);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <div>
          <label>Student Name</label>
          <input
            type="text"
            onChange={(e) => {
              nameHandler(e);
            }}
          ></input>
          {name}
        </div>
        <div>
          <label>Student Email</label>
          <input
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          {email}
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE :{" "}
          <input
            type="radio"
            onChange={(e) => {
              setgender(e.target.value);
            }}
            name="gender"
            value="male"
          ></input>
          <br></br>
          FEMALE :{" "}
          <input
            type="radio"
            onChange={(e) => {
              setgender(e.target.value);
            }}
            name="gender"
            value="female"
          ></input>
          <br></br>
          {gender}
        </div>
        <div>
          <label>Country</label>
          <select
            onChange={(e) => {
              setcountry(e.target.value);
            }}
          >
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
          {country}
        </div>
        <div>
            <label>Hobbies</label>
            <br></br>
            <input type="checkbox" onChange={(e)=>{sethobbies([...hobbies,e.target.value])}} value="cricket"></input>CRICKET
            <input type="checkbox" onChange={(e)=>{sethobbies([...hobbies,e.target.value])}} value="football"></input>Football
            <input type="checkbox" onChange={(e)=>{sethobbies([...hobbies,e.target.value])}} value="reading"></input>Reading
        </div>
        {
            hobbies?.map((hob)=>{
                return(
                    <div>
                        {hob}
                    </div>
                )
            })
        }
        <div>
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
};
