import logo from "./logo.svg";
import "./App.css";
import "./footer.css";
function App() {
  //js code

  var age = 18;
  var name = "Rahul";
  var isMarrid = false;
  var person = {
    name: "Dhiraj",
    age: 20,
    isMarrid: false,
  };

  var headerStyle = {
    color: "red",
    background: "black",
    margin: "50px",
  };

  var users = [
    {
      id: 1,
      name:"amit",
      age:28
    },
    {
      id: 2,
      name:"parth",
      age:30
    },
  ]
  //var users =undefined;

  return (
    <div className="App">
      <div style={headerStyle}>header</div>
      <h1>Hello</h1>
      {age}
      <h1>Age ={age}</h1>
      <h2>{name}</h2>
      <h3>{isMarrid == true ? "Married" : "Not married"}</h3>
      {person.name}
      <div style={{ color: "blue", background: "black" }}>
        <h2>{person.name}</h2>
      </div>
      {/* <div className="footer">
        <h2>Footer</h2>
      </div> */}

      <div>
        <h2>Users</h2>
        {/* {
          users.map((user)=>{
            return(<div>
              <h1>{user.id}</h1>
              <h1>{user.name}</h1>
              <h1>{user.age}</h1>
            </div>)
          })
        } */}
        <ul>
          {
            
            users?.map((user)=>{
              return(
                <li>
                  <h1>{user.id}</h1>
                  
                    {
                      user. age >=30 ? <h1 style={{color:"green"}}>{user.name}</h1> : <h1 style={{color:"red"}}>{user.name}</h1>
                    }
                  
                  {/* <h1>{user.name}</h1> */}
                  <h1>{user.age}</h1>
                </li>
              )
            })
          }
        </ul>
      </div>




    </div>
  );
}

export default App;
