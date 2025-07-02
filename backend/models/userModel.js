import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

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
    ref: 'PinBoard'
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
    ref: 'Chat'
  }]
})

userSchema.pre(/^find/, function(next){
  this.find({active: {$ne: false}});
  next();
})

userSchema.pre('save', async function(next){
  //only run this function if password was modified
  if(!this.isModified('password')) return next();
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete the password confirm field(to free storage)
  this.passwordConfirm = undefined;
});

userSchema.pre('save', function(next){
   if (!this.isModified('password') || this.isNew) return next()

    this.passwordChangedAt = Date.now() - 1000;
    next();
});
//filter out inactive users from findqueries
userSchema.pre(/^find/, function(next) {
// this points to the current query
this.find({active: {$ne: false}});
next();
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
  console.log(candidatePassword, userPassword)

  return await bcrypt.compare(candidatePassword, userPassword);
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