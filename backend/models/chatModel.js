import mongoose from 'mongoose'

const chatSchema = mongoose.Schema({
  //chat:{
    messages:[{
      contend:{
        type: String,
      },
      sender:{
        type: String
      },timestamp:{
        type: Date,
        default: Date.now(),
      }
    }],
    users:[{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }]
  //}
  
})

const Chat = mongoose.model('Chat',chatSchema);
export default Chat;