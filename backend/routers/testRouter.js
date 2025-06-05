import express from 'express'

const router = express.Router()

const test = (req,res,next)=>{
  res.status(200).json({
  data:{
    string: 'success'
  }})}

router.use('/', test);

export default router
