import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiences from "./Experiences";
import NationalExams from "./NationalExams";
import Publications from "./Publications";
import Researches from "./Researches";
import NavbarMenu from "./NavbarMenu";
import Patent from "./Patent";
function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="main">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/nationalExams" element={<NationalExams />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
          <Route path="/researches" element={<Researches />}></Route>
          <Route path="/navbarMenu" element={<NavbarMenu />}></Route>
          <Route path="/patent" element={<Patent/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
