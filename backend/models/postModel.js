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
    type: mongoose.Schema.ObjectId,
    ref:'User',
  }],
  comments:[{
     type: mongoose.Schema.ObjectId,
     ref: 'Comment'
  }]
})


const Pin = mongoose.model('Pin', pinSchema);
export default Pin