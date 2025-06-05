import React from 'react'
import {Link, Outlet} from  'react-router-dom';

import './App.css'



function App() {
  
//Pinnboard-model is missing
  return (
    <div className = 'container'>
      <div className = 'app-container'>
        <div className='content-container'>
        <Outlet/>
        </div>
      <div className = 'fotter-container'>
        <Link to={'/home'}>
        <div className='home-menue-container menu-container'></div>
        </Link>
        <Link to={'/CreatePost'}>
        <div className='search-menue-container menu-container'></div>
        </Link>
        <Link to={'/texts'}>
        <div className='texts-menue-container menu-container'></div>
        </Link>
        <Link to={'/pinned'}>
        <div className='pin-menu-container menu-container'></div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default App
