import React,{useState} from 'react'
import './Pinned.css'
import {Link} from 'react-router-dom'
import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import 'bootstrap/dist/css/bootstrap.min.css';

function Pinned() {

const [onPins, setOnPins] = useState<boolean>(true)
const [onPinwalls, setOnPinwalls] = useState<boolean>(false)
const handleClickOnPins = () =>{
  setOnPins(true);
  setOnPinwalls(false)
}
const handleClickOnPinwalls = () =>{
  setOnPins(false);
  setOnPinwalls(true)
}

  return (
    <div className='pinned-container'>
      <div className="header">
      <p className='header-item' onClick={handleClickOnPins}>Pins</p>
      <p className='header-item' onClick={handleClickOnPinwalls}>Pinwalls</p>
      </div>
     <div className="subheader">
     <input type='text' placeholder='Search...'/>
     </div>
     {onPins&&<div className='pins-content-container'>
      <div className='sub-subheader'>
        <div className='favourites-container'>Favourites</div>
        <div className='selfmade-container'>selfmade</div>
      </div>
      <div className="pins-container">
      <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
          700: 4,
          300: 2}} className='h-masonry-grid'>
          <Masonry gutter='10px' className='h-masonry-column mx-2'>
        <a href={'/post/massawa'} >
        <img src={massawa}  className='home-image img-fluid'/>
        </a>
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
      </div>}
      {onPinwalls&&<div className='pinwalls-content-container'>
        <div className="collages-container">
          <a href={'/pinwall/pinwall0'}>
          <div className="collage">
            <div className="collage-left">
              <img src={massawa} className='collage-img'/>
            </div>
            <div className='collage-right'>
            <div className="collage-right-top">
               <img src={monalisa} className='collage-img'/>
            </div>
            <div className="collage-right-bottom">
               <img src={guitar}className='collage-img' />
            </div>
            </div>
          </div>
          </a>
          <div className="collage">
            <div className="collage-left">
              <img src={massawa} className='collage-img'/>
            </div>
            <div className='collage-right'>
            <div className="collage-right-top">
               <img src={monalisa} className='collage-img'/>
            </div>
            <div className="collage-right-bottom">
               <img src={guitar}className='collage-img' />
            </div>
            </div>
          </div>
          <div className="collage">
            <div className="collage-left">
              <img src={massawa} className='collage-img'/>
            </div>
            <div className='collage-right'>
            <div className="collage-right-top">
               <img src={monalisa} className='collage-img'/>
            </div>
            <div className="collage-right-bottom">
               <img src={guitar}className='collage-img' />
            </div>
            </div>
          </div>
        </div>
        <h1 className='unsorted-ideas'>unsorted ideas</h1>
        <div className='ideas-container'>
        <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
            700: 4,
            300: 2}} className='h-masonry-grid'>
            <Masonry gutter='10px' className='h-masonry-column'>
          <Link to={'/post/massawa'} >
          <img src={massawa}  className='home-image img-fluid'/>
          </Link>
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
   }
</div>
  )
}

export default Pinned