import React from 'react'
import { Link} from  'react-router-dom';
import City from './../assets/city.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chats.css'

function Chats() {
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
          <Link to={'/chats/user123'}>
          <div className='chat p-2'>
            <img className='contact-img' src={City}/>
            <div className='chat-subdiv'>
            <p className='contact-name'>Name</p>
            <p className='last-message'> last message last message last message</p>
            </div>
            <div className = 'timestamp-div p-2 m-3'>
            <p className='timestamp'>29.05.25</p>
            </div>
          </div>
          </Link>
          <Link to={'/texts/user123'}>
        <div className='chat p-2'>
          <img className='contact-img' src={City}/>
          <div className='chat-subdiv'>
          <p className='contact-name'>Name</p>
          <p className='last-message'> last message last message last message</p>
          </div>
          <div className = 'timestamp-div p-2 m-3'>
          <p className='timestamp'>29.05.25</p>
          </div>
        </div>
        </Link>
       </div>
  </div>
  )
}

export default Chats