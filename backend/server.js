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


