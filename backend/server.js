import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';
import User from './models/userModel.js'
import PinBoard from './models/pinBoardModel.js'

dotenv.config({path: './config.env'})

app.listen(3000,()=>{
  console.log('listening on port 3000');
})

const DB ='mongodb+srv://20samuels02:0K91WORtIFJiRbcK@cluster0.7cgcfx8.mongodb.net/'

mongoose.connect(DB).then(()=>{console.log('DB connection successful!')})

try{
  const pinboards = await PinBoard.find()
  for(const pinboard of pinboards){
    //const i = Math.floor(Math.random * 30)+1;
  
    const fetchUrl = `https://api.unsplash.com/photos/random?count=20&client_id=tZFo_JxgKuUJwBCxomOvjHJhCwz_biCYIQxwcNhBxJ4`

    const response = await fetch(fetchUrl)
 
    const photos = await response.json()
    
    console.log(photos)
    console.log('___________________')
    
    for(const photo of photos){
    const url = 'http://localhost:3000/imagen/api/v1/posts/'
    const url2 = 'http://localhost:3000/imagen/api/v1/pinboards/'
    const postData = {
      image: photo.urls.raw,
      description: photo.description,
      pinBoards: pinboard._id,
      createdAt: pinboard.createdAt,
      createdBy: pinboard.user
      
    }

    const res = await fetch(url, {method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      
    const pinData = {pinBoardId : pinboard._id, postId: res._id}

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
    