/* eslint-disable no-unused-vars */
import React, { Children } from 'react'
import './Card.css'
// import './Cardsc.scss'
import { Do } from './Data_Dos'
import { Donts } from './Data_Donts'

const Card = () => {
  return (
    <>
    <div className='card-container'>
      <div className='card-main2'>
      <div className="card-content">
      <h2 className="card-title">Some Dos while making a house are as follows:</h2>
        <ul>
          {Do.map((dos) => (
            <li key={""} className='card-subtitle'>{dos}</li>
          ))}
        </ul>
        </div>
      </div>

      <div className='card-main2'>
      <div className="card-content">
      <h2 className="card-title">Some Donts while making a house are as follows:</h2>
        <ul>
          {Donts.map((Donts) => (
            <li key={""} className='card-subtitle'>{Donts}</li>
          ))}
        </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card