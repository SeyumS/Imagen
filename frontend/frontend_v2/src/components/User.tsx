import React,{useState} from 'react'
import { useNavigate,Link} from 'react-router-dom'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

import X from './../assets/x.jpeg'
import city from './../assets/city.jpeg'
import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css'

function User() {
// mit use params ein fetch request machen
  

  const navigate = useNavigate();

 const[onCreated, setOnCreated] = useState<boolean>(true)
 

 const handlePortfolioClick = () =>{
  setOnCreated(!onCreated);
 }

  return (
    <div className='user-container'>
      <div className='user-header'>
      <img src={X} className='user-back-arrow' onClick={()=>{navigate(-1)}}/>
      </div>
      <div className="user-profile-container">
       <div className='user-image-container m-3'><img src={city} className='user-profile-picture'/>
       </div>
       <div className='u-user-name-container mb-4'><p className='u-user-name'>User</p></div>
       </div>
      
      <div className="u-user-stats m-2"> <p className="u-user-stat">21k Follower</p>
      <p className='u-user-stat'>154 followed</p>
      <p className='u-user-stat'>10 Mio clicks per month</p>
      </div>
      <div className="u-description-container"><p className='u-user-description'>description</p></div>
      <div className="u-button-container">
      <button className='u-button m-2 rounded'>Follow</button>
      </div>
      
      <div className='user-portfolio'>
        <div className="u-portfolio-header">
        <p className='user-created' onClick={handlePortfolioClick}>created</p>
        <p className='user-saved' onClick={handlePortfolioClick}>saved</p>
        </div>
       {onCreated? 
        
        <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
          700: 4,
          300: 2}} className='h-masonry-grid'>
          <Masonry gutter='10px' className='h-masonry-column'>
        <Link to={'/post/massawa'} >
        <img src={massawa}  className='home-image img-fluid rounded'/>
        </Link>
        <img src={monalisa} className='home-image img-fluid rounded'/>
        <img src={guitar} className='home-image img-fluid rounded'/>
        <img src={monalisa} className='home-image img-fluid rounded'/>
        <img src={massawa} className='home-image img-fluid rounded'/>
        <img src={monalisa} className='home-image img-fluid rounded'/>
        <img src={guitar} className='home-image img-fluid rounded'/>
        <img src={massawa} className='home-image img-fluid rounded'/>
          <img src={guitar} className='home-image img-fluid rounded'/>          <img src={guitar}className='home-image img-fluid rounded'/>

          </Masonry>
        </ResponsiveMasonry>
        :
        
        <div className="u-collages-container">
          
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
      }
      </div>
      </div>
  )
}

export default User