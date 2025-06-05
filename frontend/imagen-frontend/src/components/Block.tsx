import React from 'react'
import {useNavigate} from 'react-router-dom'
import city from './../assets/city.jpeg'
import X from './../assets/x.jpeg'
import './Block.css'

function Block() {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <div className="block-container">
        <div className='b-header'>
        <img className='b-back-arrow' src={X} onClick={()=>{navigate(-1)}}/>
        </div>
        <div className="b-content">
        <img className='b-user-image' src={city}/>
        <button className='b-block-button'>Block</button>
        </div>
      </div>
    </div>
  )
}

export default Block