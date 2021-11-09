import React from "react";
import "./index.css";

import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function MainMenu() {
  return (
    <>
      {Navbar()}
      {Jumbotron()}
      {About()}
      {Projects()}
      {Contact()}
      {/* {Footer()} */}
    </>
  );
}

export default MainMenu;
