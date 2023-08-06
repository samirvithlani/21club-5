import logo from "./logo.svg";
import "./App.css";
import "./footer.css";
import HomeComponent from "./components/HomeComponent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Student } from "./components/student/Student";
import { RegisterStudent } from "./components/student/RegisterStudent";
import { UserReg } from "./components/UserReg";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Navbar } from "./components/Navbar";
import { AboutCompany } from "./components/AboutCompany";
import { AboutCountry } from "./components/AboutCountry";
import { ContactPerson } from "./components/ContactPerson";
import { Error404 } from "./components/Error404";
function App() {
  //js code
  //var users =undefined;
  var title = "Student App";

  return (
    <div className="App">
      {/* <Header/>
      <HomeComponent/>
      <Footer/> */}
      {/* <Student title ={title}/> */}
      {/* <RegisterStudent/> */}
      {/* <UserReg/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<UserReg/>}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/aboutus/company" element={<AboutCompany />}></Route>
        <Route path="/aboutus/country" element={<AboutCountry />}></Route>
        <Route path ="/contactus/person/:id" element={<ContactPerson/>}></Route>
        {/* <Route path="/*" element={<h1>Page Not Found</h1>}></Route> */}
        <Route path="/*" element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
