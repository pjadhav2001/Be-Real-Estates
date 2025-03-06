import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Demo from "./components/pages/demo";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/onsale" element={<Sales />} />
        <Route path="/services" element={<Service />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
