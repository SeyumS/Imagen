import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, 'a user musst have a name']
  },
  active:{
    type: Boolean,
    default: true
  },
  photo:{
    type:String
  },
  description:{
    type:String 
  },
  password:{
    type: String,
    required: [true, 'a user musst have a password'],
    minlength: 8,
  },
  passwordConfirm:{
    type:String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function(el){
        return el=== this.password;
      },
      message:'Passwords are not the same'
    }
  },
  email:{
    type: String,
    required:[true,'please provide an email-adress'],
    unique: true,
    lowercase: [true, 'email musst be all lowercase'],
    validate: [validator.isEmail]
  },
  pinBoards:[{
    type: mongoose.Schema.ObjectId,
    ref: 'pin'
  }],
  followercount:{
  type: Number,
   default: 0,
  },
  followingcount:{
    type: Number,
    default: 0,
  },
  phoneNumber:{
    type: String,
    required: [true, 'please provide a phone-number'],
    /*validate: [{`/^[\+]?[0-9]{0,3}\W?+[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im`}, 'please provide a valid phonenumber']*/
  },
  chats:[{
    type: mongoose.Schema.ObjectId,
    ref: 'chat'
  }]
})

userSchema.pre(/^find/, function(next){
  this.find({active: {$ne: false}});
  next();
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
  return await bycript.compare(candidatePassword, userPassword);
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
  if(this.passwordChangedAt){
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000,10);

    return JWTTimestamp < changedTimestamp
  }
  return false
};

userSchema.methods.createPasswordRestToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
}

const User = mongoose.model('User', userSchema);
export default User