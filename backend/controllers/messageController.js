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
  const user = await User.findById(req.params.id);
  const chats = user.chats
  const chat = chats.find((chat)=> chat._id.toString() === req.params.chatid)
  const messages = chat.messages;
  res.status(200).json({
   status:'success',
   data:{
     messages
   }
  })
};

export const saveMessage= async (req,res,next)=>{
  const message = await new message(req.body)
  const updatedChat = Chat.findByIdAndUpdate(req.params.id,{$push:{messages: message} })

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