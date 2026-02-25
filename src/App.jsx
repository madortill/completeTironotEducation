import React from "react";
import { useState } from "react";
import "./css/App.css";
import til from "./assets/images/tilLogo.png";
import About from "./components/About";

function App() {

  return (
    <>
      <div className="app">
      <img className="bahadEdu" src="/react-boilerplate/bahadEduIcon.png" alt="icon" />
      <About />
      <img src={til} alt="til" className="til-logo" />
      </div>
    </>
  );
}

export default App;
