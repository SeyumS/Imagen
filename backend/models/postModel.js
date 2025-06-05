import mongoose from 'mongoose'

const pinSchema = mongoose.Schema({
  image:{
    type: String,
  },
  description:{
    type: String,
  },
  keywords:[{
    type:String,
  }],
  pinBoards:[{
      type: mongoose.Schema.ObjectId,
      ref:'PinBoard',
      unique: true,
  }],
 createdAt:{
  type: Date,
  default: Date.now()
 },
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  likedBy:[{
    userId:{
    type: mongoose.Schema.ObjectId,
    ref:'User',
    unique:true
    }
  }],
  comments:[{
     type: mongoose.Schema.ObjectId,
     ref: 'Comment'
  }]
})

const Pin = mongoose.model('Pin', pinSchema);
export default Pin