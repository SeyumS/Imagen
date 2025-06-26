import React,{useState,useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import city from './../assets/city.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css'

type message = {
  text: string,
  sender: string,
  timestamp: string
}

function Chat() {

  const navigate = useNavigate();

  const{id, chatid} = useParams();
 
  useEffect(()=>{
    const fetchMessages =async()=>{
      
      const url = `http://localhost:3000/imagen/api/v1/${id}/${chatid}`
     const response = await fetch(url)
     const chatData = await response.json()
     setChatMessages(chatData)
    }
    fetchMessages()
  },[])

  
  const [chatMessages, setChatMessages] = useState<message[]>([])

  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target !== null){
    setInputValue(e.target.value)
    }
  }

  const sendMessage = async()=>{
    if(inputValue.trim() === '')return

    const newMessage = {
      text: inputValue,
      sender: "I",
      timestamp: new Date().toLocaleTimeString()
    }
    const url = `http://localhost:3000/imagen/api/v1/${id}/${chatid}`
      await fetch(url,{method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(newMessage)
    })
    
    const updatedMessages = [...chatMessages, newMessage]
    setChatMessages(updatedMessages)
    setInputValue('')

    if(chatMessages.length===1){

      const users = [id, chatid]

      const response = await fetch(url,{method: 'POST',headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({chatMessages, users})})
      console.log(response)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) =>{
    if(e.key === "Enter"){
      e.preventDefault()
      sendMessage()
    }
  }

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
        {chatMessages.map((message, id)=>(
          message.sender === 'I' ?
          <div className="i-c-chat-row">
          <div className={`${id}i-c-message`}><p className='i-c-text m-2'>{message.text}</p></div>
          </div>
          :
          <div className="y-c-chat-row">
          <div className="y-c-message"><p className='y-c-text m-2'>{message.text}</p></div>
          </div>
        ))}
        <div className="i-c-chat-row">
        <div className="i-c-message"><p className='i-c-text m-2'>question</p></div>
        </div>
        <div className="y-c-chat-row">
        <div className="y-c-message"><p className='y-c-text m-2'>response</p></div>
        </div>
      </div>

      <div className='c-footer'>
      <form className='msg-form' onSubmit={(e)=> e.preventDefault()} onKeyDown={handleKeyDown}>
       <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" onClick={sendMessage}/>
        </svg>
        </div>

        <div>
        <div className="input-group mb-3">
          <input type="text" className="form-control text-bar" placeholder="write message" aria-label="Username" aria-describedby="basic-addon1"
          value={inputValue}
          onChange={handleInputChange}/>
        </div>
        </div>
        {/*<input type='text' placeholder='type a message' className='c-text-bar'*/}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
        </div>
        </form>

      </div>
    </div>
    </div>
  )
}

export default Chat