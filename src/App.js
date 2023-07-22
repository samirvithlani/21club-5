import logo from "./logo.svg";
import "./App.css";
import "./footer.css";
import HomeComponent from "./components/HomeComponent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  //js code
  //var users =undefined;

  return (
    <div className="App">
      <Header/>
      <HomeComponent/>
      <Footer/>
     

    </div>
  );
}

export default App;
