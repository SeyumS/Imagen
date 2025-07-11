import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import {promisify} from 'util'
import AppError from '../utils/AppError.js';


const signToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
}

const createSendToken = (user, statusCode, res)=>{
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000), httpOnly:true,
  };
  if(process.env.NODE_ENV === 'production')cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);
  //console.log('req.cookies: ',req.cookies,'\n cookie signed')
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    data: {
      user 
    }
  });
}

export const signup = async (req,res,next)=>{
  const newUser = await User.create(req.body)
  const url = `${req.protocol}://${req.get('host')}/me`;
  await new isEmail(newUser, url).sendWelcome();

  createSendToken(newUser, 201, res);
}

export const login = async(req, res, next)=>{
  const {email, password} = req.body;
  
  if(!email || !password){
    return next(new AppError('Please provide email and password!', 404));
  }
  const user = await User.findOne({email}).select('+password');

  if(!user || !(await user.correctPassword(password, user.password))){
    return res.status(401).json({
      data:{
        message: 'incorrect email or password!'
      }
    })
    /*next(new AppError('Incorrect email or password', 401))*/
    
  }
  createSendToken(user, 200, res);

};

export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() +10 * 1000),
    httpOnly: true 
  });
  res.status(200).json({status: 'success'});
}

export const protect = async (req, res, next)=>{
  let token
  if(req.headers.authorization&& req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1];
  }else if (req.cookies.jwt){
    token = req.cookies.jwt;
  }
  if(!token){
    return next(new AppError('You are not logged in!', 401))
  }
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id)
  if(!currentUser){
    return next(new AppError('The user belonging to this token does no longer exist', 401))
  }
  if(currentUser.changedPasswordAfter(decoded.iat)){
    return next(new AppError('user recently changed password! please log in again', 401))
  }
  req.user = currentUser
  next()
};

export const isLoggedIn = async (req, res, next)=>{
  try{
    if(req.cookies.jwt){
      const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

      const currentUser = await User.findById(decoded.id);
      if(!currentUser){
        return next();
      }
      if(currentUser.changesPasswordAfter(decoded.iat)){
        return next(new AppError('user recently changed password! please log in again', 401))
      }
      res.locals.user = currentUser
      next()
    }
  }catch(err){
    return next();
  }
  next();
};

export const restrictTo = (...roles) => {
  return (req, res, next)=> {
    if(!roles.includes(req.user.role)){
      return next(new AppError('You do not have permission to perform this action', 403))
    }
    next();
  }
}

export const forgotPassword = async(req, res ,next)=>{
  const user = await User.findOne({email: req.body.email})
  if(!user){
    return next(new AppError('There is no user with email adress', 404));
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({validateBeforeSave: false})

  const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
  try{
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email'
    })
  }catch(err){
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({validateBeforeSave: false})

    return next(new AppError('There was an error sending the email. try again later!'), 500);
  }
}

export const resetPassword = async (req, res, next)=>{
  const hashedToken =  crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {$gt: Date.now()}
  });

  if(!user){
    return next(new AppError('Token is invalid or has expired',400))
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  createSendToken(user, 200, res);
};

export const updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if(!(await user.correctpassword(req.body.passwordCurrent, user.password))){
    return next(new AppError('Your current password is wrong', 401))
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  createSendToken(user, 200, res);
}
