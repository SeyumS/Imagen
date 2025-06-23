import React,{useState,useEffect} from 'react'
import { Link} from  'react-router-dom';
import City from './../assets/city.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chats.css'
type message={
  text: string,
  sender: string,
}
type Chat = {
  img: string,
  name: string,
  lastMessage: message,
  timestamp: Date,
  messages: message[]
}


function Chats() {
  useEffect(()=>{
    const fetchChats =async ()=>{
    const userIdRaw = await fetch('http://localhost/imagen/api/v1/me');
    const userId = userIdRaw.json();
    const response = await fetch(`http://localhost/imagen/api/v1/chats/${userId}`)
    const chatData = await response.json()
   setChats(chatData)
    }
    fetchChats()
  },[])

  const[chats, setChats] = useState<Chat[]>([])
  
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
        {chats.map((chat)=>(
          <div className='chat p-2'>
          <img className='contact-img' src={chat.img}/>
          <div className='chat-subdiv'>
          <p className='contact-name'>{chat.name}</p>
          <p className='last-message'>{chat.lastMessage.text}</p>
          </div>
          <div className = 'timestamp-div p-2 m-3'>
          <p className='timestamp'>{chat.timestamp.toDateString()}</p>
          </div>
          </div>
        ))}
       </div>
  </div>
  )
}

export default Chats