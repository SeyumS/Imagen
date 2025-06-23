import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Pinwall.css'

function Pinnwall() {
  return (
    <div className='pinwall-container'>
      <div className='pinwall-header'>
        <div className="pinwall-title-container mt-5 mb-4">
          <h1>vacation</h1>
        </div>
        <div className="pinwall-number-container">
          <p>4 Pins</p>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
          </svg>

        </div>
        <div className="pinwall-owner-container m-2">
          <div className="pinwall-owner-icon m-2">S</div>
          <p>by <span>user123</span></p>
        </div>
      </div>
      <div className="pinwall-body-container">
      <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
          700: 4,
          300: 2}} className='h-masonry-grid mx-2'>
          <Masonry gutter='10px' className='h-masonry-column'>
        
        <img src={massawa}  className='home-image img-fluid '/>
        <img src={monalisa} className='home-image img-fluid'/>
        <img src={guitar} className='home-image img-fluid'/>
        <img src={monalisa} className='home-image img-fluid'/>
        <img src={massawa} className='home-image img-fluid'/>
        <img src={monalisa} className='home-image img-fluid'/>
        <img src={guitar} className='home-image img-fluid'/>
        <img src={massawa} className='home-image img-fluid'/>
          <img src={guitar} className='home-image img-fluid'/>
          </Masonry>
        </ResponsiveMasonry> 
      </div>
    </div>
  )
}

export default Pinnwall