import AppError from '../utils/AppError.js';
import Chat from './../models/chatModel.js'
import User from './../models/userModel.js'

export const getAllChats = async (req,res,next)=>{
   const user = await User.findById(req.params.id).populate({path: 'chats'})
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
  const {id, chatid} =req.params
  const user = await User.findById(id);
  const chats = user.chats
  console.log('---',chats)
  const chat = chats.find((chat)=>{chat._id==chatid})
  const messages = chat.messages;
  res.status(200).json({
   status:'success',
   data:{
     messages
   }
  })
};

export const saveMessage= async (req,res,next)=>{
  const message = new message(req.body)
  console.log(req.body)
  const updatedChat = Chat.findByIdAndUpdate(req.params.id, req.params.chatid,{$push:{messages: message} })

  res.status(200).json({
   status:'success',
   data:{
     updatedChat
   }
  })
};

export const createChat = async(req,res,next)=>{
  const chat = await Chat.create(req.body);
  res.status(200).json({
    chat
  });
}