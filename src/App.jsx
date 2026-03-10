import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./css/App.css";
import til from "./assets/images/tilLogo.png";
import bahadEduIcon from "./assets/images/bahadEduIcon.png";
import OpeningPage from "./mainPages/OpeningPage";
import Content from "./mainPages/Content";

function App() {

  return (
    <>
      <div className="app">
      <img src={bahadEduIcon} alt="icon"  className="bahadEdu" />
     
      <Routes>
      <Route path="/" element={<OpeningPage/>} />
      <Route path="/content" element={<Content/>} />
    </Routes>
      
      <img src={til} alt="til" className="til-logo" />
      </div>
    </>
  );
}

export default App;
