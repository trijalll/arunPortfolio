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

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="main">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/nationalExams" element={<NationalExams />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
          <Route path="/researches" element={<Researches />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
