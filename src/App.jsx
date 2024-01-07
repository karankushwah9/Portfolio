import { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Project from "./Project";
import Navbar from "./Navbar";
import About from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Project" element={<Project></Project>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
