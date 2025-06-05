import React,{useState} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

function Home() {
  
  const [onLogout, setOnLogout]=useState(false);

  const handleIconClick=()=>{
    setOnLogout(!onLogout);
  }

  return (
  
      <div className='home-container'>
      <div className='home-header'>
        <input type='text' placeholder='Search' className='h-searchbar'/>
        <div className="h-logout-container">
        <div className='h-login-icon-container'>
          <div className="h-login-icon" onClick={handleIconClick}>
            <p className='h-capital-letter'>S</p>
          </div>
        </div>
        </div>
        {onLogout&&<div className="h-logout">
            <p className='h-logout-text'>logout</p>
          </div>}
        </div>
      <div className='home-content-container'>
      
    
        <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
          700: 4,
          300: 2}} className='h-masonry-grid'>
          <Masonry gutter='10px' className='h-masonry-column'>
        <Link to={'/post/massawa'} >
        <img src={massawa}  className='home-image'/>
        </Link>
        <img src={monalisa} className='home-image'/>
        <img src={guitar} className='home-image'/>
        <img src={monalisa} className='home-image'/>
        <img src={massawa} className='home-image'/>
        <img src={monalisa} className='home-image'/>
        <img src={guitar} className='home-image'/>
        <img src={massawa} className='home-image'/>
          <img src={guitar} className='home-image'/>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>        
  )
}

export default Home