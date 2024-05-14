import React from 'react'
import './Patent.css'
import Card from './Card'

function Patent() {
  return (
    <>
    <div className="part6" id="part6">
        <div className="experiences__heading">
          <div className="exp__head">
            <h1>PATENT</h1>
          </div>
          <div className="experiences__line" s></div>
        </div>
        <div className="experiences__card" id="experiences__card">
          <Card
            desc="Australian Patent Granted: Title of the invention: Intelligent System & Method for Home
            surveillance with warning of robber activities using IOT and Artificial Intelligence” Application
            No.2021105181, File Date : 09/08/2021, The Patent Office Journal No. 44/2021 Dated 29/10/2021
            "
            desc2="Indian Patent Granted: “IOT AND MACHINE LEARNING BASED SMART HEALTHCARE
            DEVICE” Design No: 400064-001on 16/11/2023 .
            "
          ></Card>
        </div>
      </div>
    </>
  )
}

export default Patent