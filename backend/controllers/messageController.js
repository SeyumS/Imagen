import AppError from '../utils/AppError.js';
import Chat from './../models/chatModel.js'
import User from './../models/userModel.js'

export const getAllChats = async (req,res,next)=>{
   const user = await User.findById(req.params.Id).populate({path: 'chats'})
   allChats = user.chats
   
   if(!allChats){
    next(new AppError('no chats', 404));
   }

   res.status(200).json({
    status:'success',
    data:{
      allChats
    }
   })
};

export const getAllMessages= async (req,res,next)=>{
  const chat = await Chat.findById(req.params.id);
  const messages = chat.find();
  res.status(200).json({
   status:'success',
   data:{
     messages
   }
  })
};

export const saveMessage= async (req,res,next)=>{
  const message = await Chat.create(req.body)

  res.status(200).json({
   status:'success',
   data:{
     message
   }
  })
};