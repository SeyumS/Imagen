import React from 'react'
import {Link} from 'react-router-dom'

import './Texts.css'
import City from './../assets/city.jpeg'

function Texts() {



  return (
    
    <div className='texts-container'>
      <div className='header'>
        <h1 className='messages-header'>Messages</h1>
        </div>
        <div className='sub-header'>
          <p className='messages-subheader'>Messages</p>
          <p className='show-all'>show all</p>
          </div>
          <div className='chats-container'>
            <Link to={'/texts/user123'}>
            <div className='chat'>
              <img className='contact-img' src={City}/>
              <div className='chat-subdiv'>
              <p className='contact-name'>Name</p>
              <p className='last-message'> last message last message last message</p>
              <div className = 'timestamp-div'>
              <p className='timestamp'>29.05.25</p>
              </div>
              </div>
            </div>
            </Link>
         </div>
    </div>
  )
}

export default Texts