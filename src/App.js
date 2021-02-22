import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
