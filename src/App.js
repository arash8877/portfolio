import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/my works" element={<Works/>} />
            </Routes>
        </>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
