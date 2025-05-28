import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";

import { useState } from "react";

let active = "";

switch (window.location.pathname) {
  case "/contact":
    active = "contact";
    break;
  case "/about":
    active = "about";
    break;
  case "/home":
    active = "home";
    break;
  default:
    active = "none";
    break;
}

function App() {
  const [currPage, setCurrPage] = useState(active);
  return (
    <div className="App">
      <HashRouter>
        <Header page={currPage} setPage={setCurrPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
