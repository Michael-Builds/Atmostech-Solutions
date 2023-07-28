import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Company from "./components/About/Company";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Industry from "./components/Industry/Industry";
import Analytics from './components/Analytics/Analytics';
import Blogs from './components/Blogs/Blogs';
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
        <Route path="/company" element={<Company />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industry" element={<Industry />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/analytics' element ={<Analytics />} />
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
