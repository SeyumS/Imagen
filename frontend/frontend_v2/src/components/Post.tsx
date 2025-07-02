import React,{useState, useEffect, useRef} from 'react'
import {} from 'react-bootstrap'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import {useParams} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Post.css'

type post={
  id: string,
  image: string,
  description: string,
  keywords:[string],
  pinBoards:string
 createdAt: Date
  createdBy:string
  likedBy:[string],
  comments:[string]
}

type user={
  _id: string,
  name: string,
  active: boolean,
  photo: string,
  description: string,
  password: string,
  passwordConfirm:string,
  email: string,
  pinBoards:[pinboard]
  followercount:number,
  followingcount:number,
  phoneNumber:string,
  chats:[chat]
}

type pinboard ={
  _id: string,
  name: string,
createdAt: Date,
user:string,
posts:[string]
}

type chat={
    _id: string
    messages:[message]
    users:[string]
  }

  type message={
    content: string,
    sender: string,
    timestamp:Date,
  }


function Post() {

  const[post, setPost]=useState<post|null>(null)

  //const[user, setUser]=useState<user|null>(null)

  const [feed, setFeed] = useState<post[]>([])

  const user = useRef<user>(null)

  const{id}=useParams()

  useEffect(()=>{
    const loadPost =async () =>{
      const response = await fetch(`http://localhost:3000/imagen/api/v1/posts/${id}`)
      const postData = await response.json();
      setPost(postData.data.post)
    }
    loadPost()
  },[])

  useEffect(()=>{
    const loadUser =async () =>{
      if(post){
        const response = await fetch(`http://localhost:3000/imagen/api/v1/users/${post.createdBy}`)
      const userData = await response.json();
      user.current = userData.data.user
    }
    }
    loadUser()
  },[post])

  useEffect(()=>{
   const loadFeed=async()=>{
    const response = await fetch(`http://localhost:3000/imagen/api/v1/posts/`)
    const feedData = await response.json();
    setFeed(feedData.data.limitedPosts)
   }
   loadFeed()
  })

  
  const handlePinPost = async ()=>{
    const url=`http://localhost:3000/imagen/api/v1/post/${id}`
    await fetch(url, {method:'PUT', headers: {'Content-Type': 'application/json'}})
  }

  return (
        <div className='post-container'>
  
          {/* Post section with image and comments */}
          <div className='post-section-container'>
            <div className='post-section m-4'>
            
              {/* Post Image */}
              <div className='post-image-container'>
                <img src={post? post.image : ''} alt='post' className='img-fluid m-2' />
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
            <a href={`/user/${user.current ? user.current._id :''}`}>
            <img src={user.current ? user.current.photo: ''} className='post-user-photo img-fluid ml-5'/>
            </a>
            <a href={`/user/${user.current ? user.current._id :''}`}>
            <p className='post-user-name mx-3'>{user.current ? user.current.name : ''}</p>
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart mx-2 pin-heart" viewBox="0 0 16 16">
              <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z"  onClick={handlePinPost}/>
            </svg>

          </div>
  
          {/* Feed Section */}
          <div className='feed-container'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 1000: 5, 700: 4, 300: 2 }} className='h-masonry-grid mx-2'>
              <Masonry gutter='10px' className='h-masonry-column'>
               
                {feed.map((post)=>(
                  <a href={`/post/${id}`}>
                  <img src={post.image} alt='image' className='home-image img-fluid'/>
                  </a>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
  )
  
}

export default Post