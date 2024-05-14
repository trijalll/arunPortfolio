import React from "react";
import Card from "./Card";
import "./Experiences.css";

function Experiences(props) {
  return (
    <>
      <div className="experiences">
        <div className="experiences__heading">
          <h1>WORK EXPERIENCES</h1>
          <div className="experiences__line"></div>
        </div>
        <div className="experinces__card">
          <Card
            tittle="Bharati Vidyapeeth’s College of Engineering (BVCOE)"
            time="12th September 2012 – Present"
            location="GGSIPU, New Delhi, India"
            desc="Bharati Vidyapeeth’s College of Engineering is an engineering
            college affiliated to Guru Gobind Singh Indraprastha University
            and approved by the AICTE. It was established in 1999."
            desc2="Worked in the college as Assistant Professor. While working in
            BVCOE, I have taught engineering level courses such as Compiler
            Design, Soft Computing ,Data Structure etc. Apart from teaching,
            performed various Institute level as well."
          ></Card>
          <Card
            tittle="All India Council for Technical Education"
            time="12th September 2011 - 12th September 2012."
            location="MHRD New Delhi"
            desc="Worked as e-Governance consultant in AICTE-New Delhi. I have coordinated with L&T
            infotech to develop AICTE portal for every year approval process. I was working under
            ADVISOR-I, Prof. S.G.Bhirud from 12th September 2011 to 12th September 2012."
          ></Card>
        </div>
      </div>
    </>
  );
}

export default Experiences;
