import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';
import User from './models/userModel.js'
import PinBoard from './models/pinBoardModel.js'
import Pin from './models/postModel.js'

dotenv.config({path: './config.env'})

app.listen(3000,()=>{
  console.log('listening on port 3000');
})

const DB ='mongodb+srv://20samuels02:0K91WORtIFJiRbcK@cluster0.7cgcfx8.mongodb.net/'

await mongoose.connect(DB).then(()=>{console.log('DB connection successful!')})

/*const newUser={
  name: "mike musterman",
  photo: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=…",
  password: "test1234",
  passwordConfirm: "test1234",
  email: "musterman@gmail.com",
  followercount: 0,
  followingcount: 0,
  phoneNumber: "54678 3645305",
}
const user = User.create(newUser);*/


