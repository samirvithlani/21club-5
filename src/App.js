import logo from "./logo.svg";
import "./App.css";
import "./footer.css";
import HomeComponent from "./components/HomeComponent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Student } from "./components/student/Student";
import { RegisterStudent } from "./components/student/RegisterStudent";
function App() {
  //js code
  //var users =undefined;
  var title  = "Student App";

  return (
    <div className="App">
      {/* <Header/>
      <HomeComponent/>
      <Footer/> */}
      {/* <Student title ={title}/> */}
      <RegisterStudent/>
     

    </div>
  );
}

export default App;
