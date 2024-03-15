import React from "react";
import "./Navbar.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
// import Experiences from "./Experiences";
// import Awards from "./Awards";
import Body from "./Body";

function Navbar() {
  let onClick = () => {
    var exp = document.querySelector("#Exp");
    exp.style.fontWeight = "600";
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <NavLink to={""} id={"logo"}>
            Dr. Arun Kumar Dubey
          </NavLink>
        </div>
        <div className="navbar__right">
          <NavLink id="Exp" to={"/experiences"}>
            Experiences
          </NavLink>
          <NavLink to={"/researches"}>Researches</NavLink>
          <NavLink to={"/NationalExams"}>National Exams</NavLink>
          <NavLink to={"/publications"}>Publications</NavLink>
          <a href="#part6">Patent</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
