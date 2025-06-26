import React,{useEffect,useState} from 'react'
import {} from 'react-bootstrap'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'


function Home() {
  
  type Image={
    _id: string,
    image: string,
    description: string,
    keywords: string,
    pinBoards: string,
    createdAt: Date,
    createdBy: string,
    likedBy:string,
    comments: string,
  }

  const [posts, setPosts] = useState<Image[]>([]);

  useEffect(()=>{
   
    const fetchFeed = async () =>{ 
     const url= 'http://localhost:3000/imagen/api/v1/posts/'
     try{
  const response  = await fetch(url);
  if(!response.ok){
    throw new Error (`Response status: ${response.status}`);
  }

  const data = await response.json()
  const postData = data.data.limitedPosts
    setPosts(postData);
    console.log(postData)
}catch(error){
  if(error instanceof Error)
  console.log(error.message);
}
    }
fetchFeed()

},[])

  return (
    <div className='home-container'>
      <div className="home-header-container">
      <div className="input-group input-group-lg mx-5 container-fluid">
        <input type="text" className="form-control m-5" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <div className="h-logout-container">
        <div className='h-login-icon-container my-5'>
          <div className="h-login-icon">
            <p className='h-capital-letter m-1'>S</p>
          </div>
        </div>
        </div>
        </div>
        <div className="home-body-container">
        <ResponsiveMasonry columnsCountBreakPoints={{1000: 5,
            700: 4,
            300: 2}} className='h-masonry-grid mx-2'>
            <Masonry gutter='10px' className='h-masonry-column'>
      
            {posts.map((post, id)=>(
              <a href={`/post/${post._id}`}>
              <img src={post.image} alt='image'
              className={`${id} home-image img-fluid`}/>
          </a>
          ))}
            </Masonry>
          </ResponsiveMasonry> 
        </div>
      
    </div>
  )
}

export default Home