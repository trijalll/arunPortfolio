import React from "react";
import "./Card.css";
import "./CardReaspons.css";

function Card(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card__head">
            <div className="card__head__line"></div>
            <div className="card__head__tittle">
              <div className="card__tittle__name">
                <h4>{props.tittle}</h4>
                <p className="smallText">{props.time}</p>
              </div>
              <div className="card__tittle__desc">
                <p className="smallText">{props.location}</p>
              </div>
            </div>
          </div>
          <div className="card__cont">
            <div className={`card__cont__line ${props.exams}`}></div>
            <div className="card__cont__desc">
              <p>{props.desc}</p>
              <p>{props.desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
