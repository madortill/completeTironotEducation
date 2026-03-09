import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./css/App.css";
import til from "./assets/images/tilLogo.png";
import bahadEduIcon from "./assets/images/bahadEduIcon.png";
import About from "./components/About";
import OpeningPage from "./mainPages/OpeningPage";

function App() {

  return (
    <>
      <div className="app">
      <img src={bahadEduIcon} alt="icon"  className="bahadEdu" />
      <About />
      <Routes>
      <Route path="/" element={<OpeningPage/>} />
    </Routes>
      
      <img src={til} alt="til" className="til-logo" />
      </div>
    </>
  );
}

export default App;
