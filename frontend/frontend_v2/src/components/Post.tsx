import React from 'react'
import {} from 'react-bootstrap'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'
import city from './../assets/city.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Post.css'



function Post() {
  return (
        <div className='post-container'>
  
          {/* Post section with image and comments */}
          <div className='post-section-container'>
            <div className='post-section m-4'>
            
              {/* Post Image */}
              <div className='post-image-container'>
                <img src={monalisa} alt='post' className='img-fluid m-2' />
              </div>
  
              {/* Comments */}
              <div className="post-comment-container">
                <div className="post-comment-header m-3">2 comments</div>
  
                {/* Comment 1 */}
                <div className="post-comment mx-2  p-2 border rounded">
                  <div className="comment-icon-container">
                    <div className="comment-icon">S</div>
                  </div>
                  <div className="comment-content-container">
                    <div className="comment-upper-container">
                      <p className='my-1 mx-2'>AnnaLaura</p>
                      <p className='m-0'>bellissimo</p>
                    </div>
                    <div className="comment-lower-container d-flex align-items-center gap-2 mx-2">
                      <p className='m-0 h6 text-muted'>4y</p>
                      <p className='m-0 h6 text-muted'>Reply</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart mx-2" viewBox="0 0 16 16">
                        <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z" />
                      </svg>
                    </div>
                  </div>
                </div>
  
                {/* Comment 2 */}
                <div className="post-comment mx-2 p-2 border rounded">
                  <div className="comment-icon-container">
                    <div className="comment-icon">S</div>
                  </div>
                  <div className="comment-content-container">
                    <div className="comment-upper-container">
                      <p className='my-1 mx-2'>AnnaLaura</p>
                      <p className='comment-text m-0'>bellissimobellissimobellissimobellissimobellissimobellissimobellissimobellissimobellissimobellissimobellissimo</p>
                      </div>
                    <div className="comment-lower-container d-flex align-items-center gap-2 mx-2">
                      <p className='m-0 h6 text-muted'>4y</p>
                      <p className='m-0 h6 text-muted'>Reply</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart mx-2" viewBox="0 0 16 16">
                        <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z" />
                      </svg>
                    </div>
                  </div>
                </div>
  
                {/* Input Bar */}
                <div className="input-group mb-3 px-2 comment-bar">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Write a comment..." 
                    aria-label="Example text with button addon" 
                    aria-describedby="button-addon1" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="post-user-container mb-4 mx-5 px-4">
            <a href={'/user/user123'}>
            <img src={city} className='post-user-photo img-fluid ml-5'/>
            </a>
            <a href={'/user/user123'}>
            <p className='post-user-name mx-3'>user123</p>
            </a>
            
          </div>
  
          {/* Feed Section */}
          <div className='feed-container'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 1000: 5, 700: 4, 300: 2 }} className='h-masonry-grid mx-2'>
              <Masonry gutter='10px' className='h-masonry-column'>
                <img src={massawa} className='home-image img-fluid' />
                <img src={monalisa} className='home-image img-fluid' />
                <img src={guitar} className='home-image img-fluid' />
                <img src={monalisa} className='home-image img-fluid' />
                <img src={massawa} className='home-image img-fluid' />
                <img src={monalisa} className='home-image img-fluid' />
                <img src={guitar} className='home-image img-fluid' />
                <img src={massawa} className='home-image img-fluid' />
                <img src={guitar} className='home-image img-fluid' />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
  )
  
}

export default Post