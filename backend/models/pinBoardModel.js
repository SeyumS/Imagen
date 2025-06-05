import mongoose from 'mongoose'

const pinBoardSchema = mongoose.Schema({

  name:{
      type: String,
      required: [true, 'Your pinborad musst have a name!']
  },
  createdAt:{
     type: Date,
     default: Date.now()
  },
  user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  posts:[{
    type: mongoose.Schema.ObjectId,
    ref: 'Pin'
  }]
})

/*pinBoardSchema.pre(/^find/,function(){
  this.populate({
  path: 'Pin',
  match: {pinBoard: _id},
})
})*/


const PinBoard = mongoose.model('PinBoard', pinBoardSchema)
export default PinBoard