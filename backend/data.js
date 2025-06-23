const populateUsers= async()=>{
try{
  const url = 'https://api.unsplash.com/search/users/?page=7&query=developer&client_id=tZFo_JxgKuUJwBCxomOvjHJhCwz_biCYIQxwcNhBxJ4'
  const response = await fetch(url)
 
  const data = await response.json()
  const users = data.results;
  console.log(users)
  console.log('___________________')
  for(const element of users){
    if(element === undefined|| element.username == null){
      continue
    }
    const url = 'http://localhost:3000/imagen/api/v1/users/'
  
    const userData = {
      name: element.username,
      photo: element.profile_image.small,
      description: element.bio,
      password: "test1234",
      passwordConfirm: "test1234",
      email: `${element.username}@gmail.com`,
      phoneNumber: '54678 3645305'
    }
    const res = await fetch(url, {method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  }
  }catch(err){
    console.log(err.message)
  }
}

const createPinwals = async ()=>{
  try{
    let i = 1
    const data = await User.find()
    const users = data
    //await Pin.deleteMany()

    for(const user of users){
      //console.log(pinboard)
      //console.log('___________________')
    
      const fetchUrl = `https://api.unsplash.com/collections?per_page=5&client_id=tZFo_JxgKuUJwBCxomOvjHJhCwz_biCYIQxwcNhBxJ4`

      const response2 = await fetch(fetchUrl)
 
      const upsplashData = await response2.json()
      const pinboards = upsplashData

      for(const pinboard of pinboards){
      const url = `http://localhost:3000/imagen/api/v1/pinboards/${user._id}`
    
    
    
  
      const pinBoardData = {
        name: pinboard.title,
        user: user._id ,
      }
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pinBoardData)
      })
  
      const result = await response.json()
  
      console.log('Created pinboard ID:', result.data.pinBoardId)
      console.log('Updated user ID:', result.data.userId)
    }
      }  
  }catch(err){
      console.log(err.message)
    }
}

const populatePhotos =async () =>{
  try{
    let i = 1
    const data = await PinBoard.find()
    const pinboards = data
   //await Pin.deleteMany()

  //add :id to the route

    for(let i = 400; i<437; i++){
      //console.log(pinboard)
      //console.log('___________________')
      const pinboard = pinboards[i]
      /*if(i % 50 !== 0|| pinboard === null){
        i++;
       continue;
      }*/
      const fetchUrl = `https://api.unsplash.com/photos/random?count=20&client_id=tZFo_JxgKuUJwBCxomOvjHJhCwz_biCYIQxwcNhBxJ4`

      const response = await fetch(fetchUrl)
 
      const data = await response.json()
      const photos = data
      for(const photo of photos){
      const url = 'http://localhost:3000/imagen/api/v1/posts/'
    
    
      const postData = {
        image: photo.urls.raw,
        description: photo.description,
        pinBoards: pinboard._id,
        createdAt: photo.created_at,
        createdBy: pinboard.user
      }

       const res = await fetch(url, {method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })

      const url2 = `http://localhost:3000/imagen/api/v1/pinboards/${pinboard._id}`
    
    
      const pinId = await res.json()
      console.log('JSON Object:')
      console.log(i)
      console.log(pinboards.length)
      const pinData = {postId : pinId.data.post}
   
    
      const res2 = await fetch(url2,{method:'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pinData)
      })
    }   
   }
  }catch(err){
      console.log(err.message)
    }
}

const populatePinwalls = async () =>{
  try{
    const data = await PinBoard.find()
    const pinboards = data
   //await Pin.deleteMany()

    const photos  = await Pin.find();
     let i = 1
    for(let x = 50; x<100; x++){
      const pinboard = pinboards[x]
      while(i % 20 !== 0){
     const url=`http://localhost:3000/imagen/api/v1/pinboards/${pinboard._id}`

      const response = await fetch(url,
        {method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(photos[i])}
      )
      console.log(pinboard);
      i++;
      console.log(i) 
    }
    i++;
    }
  }catch(err){
      console.log(err.message)
    }

}