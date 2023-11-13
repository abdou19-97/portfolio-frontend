import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import "./images/home-bg.jpg";
import "./index.css";
import { Route, Routes } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
// import resume from "./Components/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
