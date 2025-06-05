import PinBoard from './../models/pinBoardModel.js'
import User from './../models/userModel.js'
import Pin from './../models/postModel.js'
import AppError from './../utils/AppError.js'



export const getAllPinboards = async(req, res, next)=>{
  const user = await User.findById(req.params.id)
  const pins = user.pinBoards;
  res.status(200).json({
    status: 'success',
    data:{
     pins
    }
  })
}

export const createNewPinboard = async(req, res, next)=>{

  const newPinBoard = await PinBoard.create(req.body)
  const updatedUser = User.findByIdAndUpdate(req.params.id,{$push:{pinBoards: newPinBoard._id}},{new: true})
  
   res.status(200).json({
     status: 'success',
     data:{
      pinBoardId: newPinBoard._id,
      userId: updatedUser._id
     }
   })
}

export const updatePinboard = async(req,res,next)=>{
  const pinBoard = await PinBoard.findById(req.body.pinBoardId);
  const updatedPinBoard = await PinBoard.updateOne({_id: pinBoard._id}, {$push:{pinBoards: req.body.postId}})

}

export const getAllPostsOfPinboard = async(req, res,next)=>{
  const pinboard = await PinBoard.findById(req.params.id);
  const posts = pinboard.posts

  res.status(200).json({
    status: 'success',
    data:{
     posts
    }
  })
}

/*export const pinPost = async(req, res, next)=>{
  const post = await Pin.findById(req.body)
  const pinBoard = PinBoard.findbyIdAndUpdate(req.params.id,{$push:{ posts: post}},{new: true})
 
  res.status(200).json({
    status: 'success',
    data:{
     pinBoard
    }
  })
}


export const removePost =async(req,res,next)=>{
  const {pinBoardId, postId} = req.params;
  
  if(PinBoard.findById(pinBoardId) == userId){
    new AppError('not authorized for this action')
  }
  
  const deletedPost = await PinBoard.findByIdAndupdate(pinBoardId, {$pull:{posts: {_id: postId}}},{new: true})

  if(!deletedPost){
    console.error('post not found')
  }
  res.status(204).json({
    status: 'success',
    data: null
  })
}*/