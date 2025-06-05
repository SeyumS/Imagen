import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
  comment:{
    user:{
     type: mongoose.Schema.ObjectId,
     ref: 'User'
    },
    content:{type: String,
             required: [true, 'cant leave a comment without text']
    },
    timestamp:{
     type: Date,
     default: Date.now()
    }
 }
})
const Comment = mongoose.model('Comment', commentSchema)

export default Comment;