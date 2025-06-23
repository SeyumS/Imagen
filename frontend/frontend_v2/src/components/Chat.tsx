import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import city from './../assets/city.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css'

function Chat() {

  const navigate = useNavigate();
  return (
    <div className='container'>
    <div className='c-chat-container p-3'>
      <div className="c-chat-header mb-3">

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill c-back-arrow" onClick={()=>{navigate(-1)}} viewBox="0 0 16 16">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
      </svg>

       <img src={city}className='c-profile-picture m-1'/>
       <p className='c-profile-name m-1'>user123</p>
       <Link to={'/chats/user123'} className='c-options-link'>

       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots c-options m-3" viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
        </svg>

       </Link>
      </div>
      <div className="c-chat-messages-container p-3 ">
        <div className="i-c-chat-row">
        <div className="i-c-message"><p className='i-c-text m-2'>question</p></div>
        </div>
        <div className="y-c-chat-row">
        <div className="y-c-message"><p className='y-c-text m-2'>response</p></div>
        </div>
      </div>
      <div className='c-footer'>

       <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
        </div>

        <div>
        <div className="input-group mb-3">
          <input type="text" className="form-control text-bar" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        </div>
        {/*<input type='text' placeholder='type a message' className='c-text-bar'*/}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Chat