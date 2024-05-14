import React from 'react'
import './ResCard.css'
import './ResCardRespons.css'
function Rescard(props) {
  return (
    <>
    <div className="container">
        <div className="card">
          <div className="card__head">
            <div className="card__head__line"></div>
            <div className="card__head__tittle">
              <div className="card__tittle__name">
                <h2>{props.tittle}</h2>
              </div>
            </div>
          </div>
          <div className="res__card__cont">
            <div className={`card__cont__line ${props.exams}`}></div>
            <div className="res__card__cont__desc">
            <p>{props.res__tittle}</p>
              <div className="res__desc">
                <h5>{props.desc__head}</h5>
                <p>{props.desc__cont}</p>
              </div>
              <div className="res__desc">
                <h5>{props.desc__head2}</h5>
                <p>{props.desc__cont2}</p>
              </div>
              <div className="res__desc">
                <h5>{props.desc__head3}</h5>
                <p>{props.desc__cont3}</p>
              </div>
              <div className="res__desc">
                <h5>{props.desc__head4}</h5>
                <p>{props.desc__cont4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rescard