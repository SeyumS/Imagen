import mongoose from 'mongoose'

const chatSchema = mongoose.Schema({
  chats:[{
    messages:[{
      contend:{
        type: String,
      },
      user:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required: [true, 'a message must have a user'],
      },timestamp:{
        type: Date,
        default: Date.now(),
      }
    }],
    users:[{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }]
  }]
  
})

const Chat = mongoose.model('Chat',chatSchema);
export default Chat;