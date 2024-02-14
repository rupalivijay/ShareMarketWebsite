import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Cource from './Cource';
import NavBar from './Navbar';
import Footer from './Footer';
import Reviews from './Reviews';

import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import Freeclass from './freeclass';

function App() {
  return (
      <>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={ <Home />}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/cource" element={<Cource/>}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/freeclass" element={<Freeclass/>}/>
        <Route exact path="/reviews" element={<Reviews/>}/>
   
       {/*  <Redirect to=""/> 
        <Footer />*/} 
      </Routes>
      <br></br>
      <br></br>
     <Footer/>
      </>
  );
}

export default App;
