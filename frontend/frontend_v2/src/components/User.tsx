import React,{useState,useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

import X from './../assets/x.jpeg'

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
  pinBoards:[pinboard],
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
    
    messages:[message]
    users:[string]
    _id: string
  }

  type message={
    content: string,
    sender: string,
    timestamp:Date,
  }


function User() {
  
  const navigate = useNavigate();

  const {id} = useParams()

  const [user,setUser] = useState<user|null>(null);
  const [localUser, setLocalUser]= useState<string|null>(null)
  const[chat, setChat]= useState<chat|null>(null)
  const[foundChat, setFoundChat] =useState<chat|null>(null)
  const [feed, setFeed] = useState<post[]>([])
  const [collections, setCollections]= useState<pinboard[]>([]);
  const [coverImages, setCoverImages]=useState<string[][]>([])

  useEffect(()=>{
    const loadUser=async()=>{
    const response = await fetch(`http://localhost:3000/imagen/api/v1/users/${id}`);
    const userData = await response.json();
    setUser(userData.data.user);
    const pinwalls = userData.data.user.pinBoards
    setCollections(pinwalls)
    
    }
    loadUser()
  },[id])


  useEffect(()=>{
    const loadCoverImages=async()=>{
      try {
        const responses = await Promise.all(
        collections.map(async (collection: pinboard) => {
          const response1 = await fetch(`http://localhost:3000/imagen/api/v1/posts/${collection.posts[0]}`);
          
          const image1 = await response1.json();

          const response2 = await fetch(`http://localhost:3000/imagen/api/v1/posts/${collection.posts[1]}`);
          
          const image2  = await response2.json();

          const response3 = await fetch(`http://localhost:3000/imagen/api/v1/posts/${collection.posts[2]}`);
          
          const image3 = await response3.json();
          
          return [image1.data.post.image, image2.data.post.image, image3.data.post.image]
        })
      );
        const covers = responses;
       setCoverImages(covers);
      
    } catch (err) {
      console.log('Failed to load cover images:', err);
    }
      
    }
    loadCoverImages()
  },[collections])

  useEffect(() => {
    const loadFeed = async () => {
      if (!user?.pinBoards?.length) return;
  
      try {
          const responses = await Promise.all(
          user.pinBoards.map(async (pinboard: pinboard) => {
            const response = await fetch(`http://localhost:3000/imagen/api/v1/pinboards/${pinboard._id}`);
            
            const feedPosts = await response.json();
            return feedPosts.data.posts
          
            
          })
        );
          const allPosts = responses.flat();
          setFeed(allPosts);
        
      } catch (err) {
        console.log('Failed to load feed:', err);
      }
    };
    loadFeed();
  }, [user]); 

  useEffect(()=>{
    const loadChatId =async()=>{
      const response = await fetch('http://localhost:3000/imagen/api/v1/users/me',{
        credentials: 'include'
      })
      const localData = await response.json()
      setLocalUser(localData.data.userId)
      if(user && localUser){
     const chats = user.chats
      const chatFound = chats.find((chat)=> 
      chat.users.includes(localUser)
     )
     setFoundChat(chatFound? chatFound : null)

     if(!foundChat){
      const response = await fetch(`http://localhost:3000/imagen/api/v1/chats/${user._id}/${localUser}`, {method: 'POST', credentials: 'include', headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({messages:[],users:[localUser, user._id]})})
        const chatData = await response.json()
        console.log('chatData: ',chatData.data.chat)
        setFoundChat(chatData.data.chat)
     }

     console.log('foundChat: ',foundChat)
       setChat(foundChat? foundChat : null);
     
      }
    }
    loadChatId()
  },[user, localUser, foundChat])
 const[onCreated, setOnCreated] = useState<boolean>(true)
 

 const handleCreatedClick = () =>{
  setOnCreated(true);
 }
 const handleSavedClick = () =>{
  setOnCreated(false);
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
      <a href={`/chats/${localUser}/${chat ? chat._id : ''}`}>
      <button className='u-button m-2 rounded'>text</button>
      </a>
      </div>
      
      <div className='user-portfolio'>
        <div className="u-portfolio-header">
        <p className='user-created' onClick={handleCreatedClick}>created</p>
        <p className='user-saved' onClick={handleSavedClick}>saved</p>
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
         {collections.map((collection, index)=>(
            <a href={`/pinwall/${collection._id}`}>
          <div className="collage">
          <div className="collage-left">
            <img src={coverImages[index][0]} className='collage-img'/>
          </div>
          <div className='collage-right'>
          <div className="collage-right-top">
             <img src={coverImages[index][1]} className='collage-img'/>
          </div>
          <div className="collage-right-bottom">
             <img src={coverImages[index][2]}className='collage-img' />
          </div>
          </div>
        </div>
        </a>
          ))}
          </div>
      }
      </div>
      </div>
  )
}

export default User