import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Cource from "./pages/Cource";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";
import Freeclass from "./pages/freeclass";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/cource" element={<Cource />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/freeclass" element={<Freeclass />} />
        <Route exact path="/reviews" element={<Reviews />} />

        {/*  <Redirect to=""/> 
        <Footer />*/}
      </Routes>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default App;
