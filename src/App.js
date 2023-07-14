import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Industry from "./components/Industry/Industry";
import Web from "./components/Web/Web";
import Software from "./components/Software/Software";
import Mobile from "./components/Mobile/Mobile";
import API from "./components/API/API";
import EDI from "./components/EDI/EDI";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/software" element={<Software />} />
        <Route path="/edi" element={<EDI />} />
        <Route path="/api" element={<API />} />
      </Routes>
    </Router>
  );
};

export default App;
