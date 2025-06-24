import React,{useState} from 'react'
import { Outlet} from  'react-router-dom';
import {} from 'react-bootstrap'

import Logo from './assets/logo.png'
import Login from './components/Login.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
const [isLoggedIn, setIsLoggedIn]= useState<boolean>(false)

  return (
    <div>
    {isLoggedIn ?
      <div className='contaier'>
        <nav className="navbar bg-dark bg-body-tertiary nav-container">
        <div className="container-fluid nav-container">
            <a href={'/home'}>
            <div className="navo contianer-fluid">
            <img src={Logo} alt="Logo" width="50" height="50" className="d-block "/>
            </div>
            </a>
            <a href={'/home'}>
            <div className="navo container-fluid">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house " viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            </div>
            </a>
            <a href={'/upload'}>
            <div className="navo container-fluid ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-plus" viewBox="0 0 16 16">
              <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z"/>
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
            </svg>
            </div>
            </a>
            <a href={'/Chats/user'}>
            <div className="navo container-fluid">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
            </svg>
            </div>
            </a>
            <a href={'/pinned'}>
            <div className="navo container-fluid"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill " viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
            </div>
            </a>
          </div>
        </nav>
        <div>
        <Outlet/>
        </div>
    </div>
    :
    <Login setIsLoggedIn = {setIsLoggedIn}/>
    }
  </div>
  )
}

export default App
