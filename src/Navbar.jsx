import React, { useRef } from 'react'
import "./Navbar.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
// import Experiences from "./Experiences";
// import Awards from "./Awards";
import Body from "./Body";
import './NavbarRespons.css'
import NavbarMenu from "./NavbarMenu";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let onClick = () => {
    var exp = document.querySelector("#Exp");
    exp.style.fontWeight = "600";
  };
  let patent= () => {
    navigate("/#part6");
  }


  // const comp = useRef();

  let navbarHidden = () => {
    let divCont = document.querySelector(".navbarHidden");
    let value = divCont.style.top;
    if (value == "10vh") {
      divCont.style.top = "-100vh";
    }
    else {
      divCont.style.top = "10vh";
    }
  }


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
          <NavLink to={"/patent"}>Patent</NavLink>
        </div>
        <NavLink className="menuRespons">
          <i class="ri-menu-fill" onClick={navbarHidden}></i>
          </NavLink>
        <div className="navbarHidden">
        <NavLink id="Exp" to={"/experiences"}>
            Experiences
          </NavLink>
          <NavLink to={"/researches"}>Researches</NavLink>
          <NavLink to={"/NationalExams"}>National Exams</NavLink>
          <NavLink to={"/publications"}>Publications</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
