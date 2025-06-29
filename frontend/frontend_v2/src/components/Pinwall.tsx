import React,{useState,useEffect} from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import {useParams} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Pinwall.css'

type post={
  _id: string,
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
  pinBoards:[string],
  followercount:number,
  followingcount:number,
  phoneNumber:string,
  chats:[string]
}


function Pinwall() {
  const {id}= useParams()
  const[feed, setFeed]=useState<post[]>([])
  const[user, setUser]=useState<user|null>(null)

  useEffect(()=>{
   const loadFeed=async()=>{
    const response = await fetch(`http://localhost:3000/imagen/api/v1/pinboards/${id}`)
    const feedData = await response.json()
    console.log(feedData)
    setFeed(feedData.data.posts);
   }
   loadFeed();
  },[id])

  useEffect(()=>{
    const loadUser=async()=>{
    const response =await fetch(`http://localhost:3000/imagen/api/v1/users/${feed[0].createdBy}`)
    const userData = await response.json();
    setUser(userData.data.user)
    }
    loadUser()
  })

  return (
    <div className='pinwall-container'>
      <div className='pinwall-header'>
        <div className="pinwall-title-container mt-5 mb-4">
          <h1>vacation</h1>
        </div>
        <div className="pinwall-number-container">
          <p>{user?.pinBoards.length} Pins</p>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
          </svg>

        </div>
        <div className="pinwall-owner-container m-2">
         <div className="pinwall-owner-icon m-2"> {user? user.photo? <img src={ user.photo} className='pinwall-user-photo'/> : user.name[0] : ''}</div>
          <p>by <span>{user? user.name: ''}</span></p>
        </div>
      </div>
      <div className="pinwall-body-container">
      <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
          700: 4,
          300: 2}} className='h-masonry-grid mx-2'>
          <Masonry gutter='10px' className='h-masonry-column'>
        
          {feed.map((post)=>(
            <a href={`/post/${post._id}`}>
          <img src={post.image} className='home-image img-fluid'/>
          </a>
          ))}
          </Masonry>
        </ResponsiveMasonry> 
      </div>
    </div>
  )
}

export default Pinwall