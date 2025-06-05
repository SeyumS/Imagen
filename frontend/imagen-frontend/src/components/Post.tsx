import React from 'react'
import { useNavigate, Link} from 'react-router-dom'
import x from './../assets/x.jpeg'
import heart from './../assets/heart.jpg'
import options from './../assets/options.png'
import city from './../assets/city.jpeg'
import city2 from './../assets/city2.jpeg'
import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

import './Post.css'





function Post() {
  

const navigate = useNavigate();
  return (
    
   <div className='post-container'>
      <img className='p-back-arrow' src={x} onClick={()=>{navigate(-1)}}/>
      <div className="p-post-container">
        <div className="p-image-container">
          <img className='p-post-img' src={city}/>
        </div>
        <div className="p-comments-container">
          <div className="p-comments-header">
          <img className='p-header-element' src={heart}/>
            <p className='p-header-element'>12</p>
            <img className='p-header-element' src={options}/>
            <button className='p-remember-button'>remember</button>
            </div>
            <div className="p-comment-sub-header">Comments 1</div>
            <div className="p-comment-content">
              <div className="p-comment-container">
                <div className="p-comment-div-1">
                <img className="p-user-profile-img" src={city}/>
                </div>
                <div className="p-comment-div-4">
                <div className="p-comment-div-2">
                  <p className='p-2-el'>user456</p>
                  <p className='p-2-el'>love it!</p>
                  </div>
                  <div className="p-comment-div-3">
                    <p className="p-3-el">6m</p>
                    <p className="p-3-el">Reply</p>
                    <img src={heart} alt=""className="p-3-el" />
                    <img src={options} alt=""className="p-3-el" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="p-comment-fotter">
              <input type='text' className='p-comment-input'/>
            </div>
          </div>
        <div className="p-adds-container">
          <img className='p-add' src={city2}/>
          <img className='p-add' src={city2}/>
          <img className='p-add' src={city2}/>
          <img className='p-add' src={city2}/>
        </div>
      </div>
      <div className='recommendations-grid'>
        <div className="p-below-post">
          <div className="p-user-container">
            <img className='p-user-photo' src={city}/>
            <Link to={'/user/user123'}>
            <p className='p-user-name'>user123</p>
            </Link>
          </div>
          <div className="p-hashtags-container">
          <p className='p-hashtags'>#image</p>
          </div>
        </div>
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

export default Post