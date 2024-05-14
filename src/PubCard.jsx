import React from 'react'
import './PubCard.css'
import './PubCardRespons.css'

function PubCard(props) {
  return (
    <>
    <div className="container">
        <div className="card">
          <div className="card__head">
            <div className="card__head__line"></div>
            <div className="card__head__tittle">
              <div className="card__tittle__name">
                <h4>{props.tittle}</h4>
              </div>
            </div>
          </div>
          <div className="card__cont">
            <div className="card__cont__line"></div>
            <div className="card__cont__desc">
              <p>{props.desc}</p>
              <p>{props.desc2}</p>
              <p>{props.desc3}</p>
              <p>{props.desc4}</p>
              <p>{props.desc5}</p>
              <p>{props.desc6}</p>
              <p>{props.desc7}</p>
              <p>{props.desc8}</p>
              <p>{props.desc9}</p>
              <p>{props.desc10}</p>
              <p>{props.desc11}</p>
              <p>{props.desc12}</p>
              <p>{props.desc13}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PubCard