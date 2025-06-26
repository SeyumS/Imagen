import React,{useState,useEffect} from 'react'
import { useNavigate,Link, useParams} from 'react-router-dom'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

import X from './../assets/x.jpeg'
//import city from './../assets/city.jpeg'
import massawa from './../assets/massawa.jpg'
import monalisa from './../assets/monalisa.jpg'
import guitar from './../assets/guitar.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css'

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


function User() {
// mit use params ein fetch request machen
  
  const navigate = useNavigate();

  const {id} = useParams()

  const [user,setUser] = useState<user|null>(null);
  const [feed, setFeed] = useState<post[]>([])

  useEffect(()=>{
    const loadUser=async()=>{
    const response = await fetch(`http://localhost:3000/imagen/api/v1/users/${id}`);
    const userData = await response.json();
    setUser(userData.data.user);
    }
    loadUser()
  },[id])
  console.log(user?user.photo: 'empty')

  useEffect(()=>{
    const loadFeed=async()=>{
     const response = await fetch(`http://localhost:3000/imagen/api/v1/posts/`)
     const feedData = await response.json();
     setFeed(feedData.data.limitedPosts)
    }
    loadFeed()
   })

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
       <div className='user-image-container m-3'><img src={user ? user.photo : ''} className='user-profile-picture'/>
       </div>
       <div className='u-user-name-container mb-4'><p className='u-user-name'>{user ?user.name:''}</p></div>
       </div>
      
      <div className="u-user-stats m-2"> <p className="u-user-stat">{`${user? user.followercount: ''} Follower`}</p>
      <p className='u-user-stat'>{`${user? user.followingcount: ''} followed`}</p>
      <p className='u-user-stat'>10 Mio clicks per month</p>
      </div>
      <div className="u-description-container"><p className='u-user-description'>{user ?user.description : ''}</p></div>
      <div className="u-button-container">
      <button className='u-button m-2 rounded'>Follow</button>
      <a href={`/chats/${id}/${user ? user._id : ''}`}>
      <button className='u-button m-2 rounded'>text</button>
      </a>
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
    
         {feed.map((post)=>(
          <a href={`/post/${post._id}`}>
          <img src={post.image} className={`${post._id} home-image img-fluid rounded`}/>  
          </a>     ))}
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