import React,{useState} from 'react'

import './Login.css'
import { useNavigate } from 'react-router-dom'


function Login() {

  const navigate= useNavigate();
  
  const[email, setEmail]=useState<string>('')
  const[password, setPassword]=useState<string>('')
  const[message,setMessage]=useState<string>('')
  

  const handleFormSubmit = async() =>{
    
    try{
      const response = await fetch('http://localhost:3000/imagen/api/v1/users/login', {method: 'POST', credentials: 'include', headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({email,password})}
        
      )
      const data = await response.json()
      console.log(data)
      setMessage(data.data.message)
      if(data.status==='success'){
        
        navigate('/home')
      }
     
    }catch{
      console.log("couldn't login")
    }
  }
  return (
    <div className='login-container'>
     <form className='form-contianer'action={handleFormSubmit}>
      <div className="from-email-div">
        <label htmlFor="" className="email-label">email</label>
        <input type="email" className="from-email-input" value={email} onChange={(e) =>setEmail(e.target.value)}/>
      </div>
      <div className="password-div">
      <label htmlFor="" className="password-label">password</label>
          <input type="text" className="from-password-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="from-button-div">
        <button className="form-submit-button" type='submit'>
          submit
        </button>
      </div>
      <label className="form-message-label">
        {message}
      </label>
     </form>
    </div>
  )
}

export default Login