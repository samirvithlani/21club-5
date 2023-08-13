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
import { Sotrage } from "./components/Sotrage";
import { Counter } from "./components/Counter";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { APiDemo3 } from "./components/api/APiDemo3";
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
        <Route path="/" element={<UserReg />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Route>

        <Route path="/aboutus/company" element={<AboutCompany />}></Route>
        <Route path="/aboutus/country" element={<AboutCountry />}></Route>
        <Route path="/contactus/person/:id" element={<ContactPerson />}></Route>
        <Route path="/storage" element={<Sotrage />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path ="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path ="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path ="/apidemo3" element={<APiDemo3/>}></Route>
        {/* <Route path="/*" element={<h1>Page Not Found</h1>}></Route> */}
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
