import mongoose from 'mongoose'

const addSchema = mongoose.Schema({
  price:{
    type:Number,
    required: true,
  },
  image:{
    type: String,
  },
  description:{
    type:String,
  }
})
const Add = mongoose.model('Add', addSchema);
export default Add