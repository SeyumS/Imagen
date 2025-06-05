import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import plus from './../assets/plus.png'
import heart from './../assets/heart.png'
import X from './../assets/x.jpeg'
import city from './../assets/city.jpeg'

import './Chat.css'

function Chat() {

  const navigate = useNavigate();
  return (
    <div className="container">
    <div className="app-container">
    <div className='container'>
    <div className='c-chat-container'>
      <div className="c-chat-header">
        <img src={X} className='c-back-arrow' onClick={()=>{navigate(-1)}}/>
       <img src={city}className='c-profile-picture'/>
       <p className='c-profile-name'>user123</p>
       <Link to={'/texts/user123/block'} className='c-options-link'>
       <p className='c-options'>...</p>
       </Link>
      </div>
      <div className="c-chat-messages-container">
        <div className="i-c-chat-row">
        <div className="i-c-message"><p className='i-c-text'>question</p></div>
        </div>
        <div className="y-c-chat-row">
        <div className="y-c-message"><p className='y-c-text'>response</p></div>
        </div>
      </div>
      <div className='c-footer'>
        <img src={plus}className='c-plus-icon'/>
        <input type='text' placeholder='type a message' className='c-text-bar'/>
        <img src={heart}className='c-heart-image'/>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Chat