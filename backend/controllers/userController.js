import User from './../models/userModel.js'
import multer from 'multer'
import AppError from '../utils/AppError.js'

const multerStorage= multer.memoryStorage();

const multerFilter= (req,file,cb) => {
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  }else{
    cb(console.error('Not an image'), false)
  }
}
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

const filterObj = (obj,...allowedFields) =>{
  const newObj={};
  Object.keys(obj).forEach(el =>{
    if(allowedFields.includes(el))newObj[el] = obj[el];
  });
  return newObj
}

export const uploadUserPhoto = upload.single('photo');

export const getMe= (req, res, next) =>{
  req.params.id = req.user.id;
  next();
}

export const updatePinBoardId = async(req,res,next)=>{
  const user = await User.findById(req.body.userId)
  const updatedUser = await User.updateOne({_id: user._id}, {$push:{pinBoards: req.body.pinBoardId}})

  res.status(200).json({
    status: 'success',
    data:{
      updatedUser
    }
  })
}

/*export const updateMe = async (req,res,next)=>{
  if(req.body.password || req.body.passwordConfirm){
    return next(new AppError('This route is not for password updates. Please use /updatePassword', 400));
  }

  const filterdBody = filterObj(req.body, 'name', 'email');
  if(req.file) filteredBody.photo = req.file.filename;

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody,{new: true,
    runvalidators: true 
  })
  //send updated User back?
}

export const deleteMe  = async (req, res, next)=>{
  await User.findbyIdAndUpdate(req.user.id, {active: false});
res.status(204).json({
  status: 'success',
  data: null
})
}*/

export const getUser = async (req,res,next)=>{
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status:'success',
    data: {
      user
    } 
  })
}

export const getAllUsers = async (req,res,next)=>{
  const users = await User.find();
  res.status(200).json({
    status:'success',
    data: {
      users
    } 
  })
}

export const createUser = (req, res, next) => {
  const newUser = User.create(req.body);
  res.status(200).json({
    status:'success',
    data: {
      newUser
    } 
  })
}