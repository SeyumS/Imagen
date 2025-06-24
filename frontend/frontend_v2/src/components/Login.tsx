import React,{useState} from 'react'

import './Login.css'

type Props={
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
function Login({setIsLoggedIn}: Props) {

  const inputData1= ''
  const inputData2= ''

  const[loginData, setLoginData] = useState<string[]>([])

  const handleFormSubmit = async() =>{
    setLoginData([inputData1,inputData2])
    try{
      await fetch('http:/localhost:3000/imagen/api/v1/users/login', {method: 'POST', headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)}
        
      )
    setIsLoggedIn(true)
    }catch{
      console.log("couldn't login")
    }
  }
  return (
    <div className='login-container'>
     <form className='form-contianer'action={handleFormSubmit}>
      <div className="from-email-div">
        <label htmlFor="" className="email-label">email</label>
        <input type="text" className="from-email-input" value={inputData}/>
      </div>
      <div className="password-div">
      <label htmlFor="" className="password-label">password</label>
          <input type="text" className="from-password-input" />
      </div>
      <div className="from-button-div">
        <button className="form-submit-button" type='submit'>
          submit
        </button>
      </div>
     </form>
    </div>
  )
}

export default Login