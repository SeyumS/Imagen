import Pin from './../models/postModel.js'
import Comment from './../models/commentModel.js'
import PinBoard from './../models/pinBoardModel.js'
import Add from './../models/addModel.js'
import AppError from '../utils/AppError.js';

export const getPost = async(req,res,next)=>{
  const post = await Pin.findById(req.params.id);
  //console.log('````',post);
  res.status(200).json({
    status: 'success',
    data:{
     post
    }
  })
}

export const getAllPosts= async(req,res,next)=>{
  const posts = await Pin.find();
  if(!posts){
    return next(new AppError('no Post found', 400))
  }
  const limitedPosts = posts.slice(0, 100)
  res.status(200).json({
    status: 'success',
    data:{
     limitedPosts
    }
  })
}

export const createPost = async(req,res,next)=>{
  const post = await Pin.create(req.body);
  //console.log(post);
  //console.log('___________________')
  
  if(!post){
    return next(new AppError('no Post created', 400))
  }
  const updatedPinBoard = await PinBoard.findByIdAndUpdate(req.body.pinBoards,{$push:{posts: post._id}},{new: true});
  
  //console.log(post);
  res.status(200).json({
    status: 'success',
    data:{
     pinBoard: updatedPinBoard,
     post: post
    }
  })
}

export const addComment = async(req, res, next)=>{
  const comment = await Comment.create(req.body);
  res.status(200).json({
    status: 'success',
    data:{
     comment
    }
  })
}
export const deleteComment = async(req, res, next)=>{
  const comment = await Comment.findByIdAndDelete(req.params.Id);
  if(!comment){
    console.error('no comment found')
  }
  res.status(200).json({
    status: 'success',
    data: null
  })
}

export const addLike = async(req, res, next)=>{
  const {postId, userId} = req.body
  const updatedUser = await Pin.findByIdAndUpdate(postId, {$addToSet:{likes: userId}});
  res.status(200).json({
  status: 'success',
  data:{
    updatedUser
  }
  })
}

export const removeLike = async(req, res, next)=>{
  const {postId, userId} = req.body
  const updatedUser = await Pin.findByIdAndUpdate(postId, {$pull:{likes: userId}});
  res.status(200).json({
    status: 'success',
    data:{
      updatedUser
    }
    })
} 

