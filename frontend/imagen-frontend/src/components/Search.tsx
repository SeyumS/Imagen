import React from 'react'
import './Search.css'
import City from './../assets/city.jpeg'
import City2 from './../assets/city2.jpeg'
import City3 from './../assets/city3.jpeg'
import Monalisa from './../assets/monalisa.jpg'

function Search() {
  return (
    <div className='search-container'>
      <div className="images-container">
        <img src={City} className='slide-image'/>
        <img src={City2} className='slide-image'/>
        <img src={City3} className='slide-image'/>
        <p className='image-header'>Search</p>
      </div>
      <div className="themes">
        <div className="theme">
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
        </div>
        <div className="theme">
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
        </div>
        <div className="theme">
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
        </div>
        <div className="theme">
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
           <img src={Monalisa} className='theme-img'/>
        </div>
      </div>
     </div>
  )
}

export default Search