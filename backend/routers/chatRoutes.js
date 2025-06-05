import express from 'express'
import {getAllMessages,getAllChats,saveMessage} from './../controllers/messageController.js';
import {protect} from './../controllers/authController.js';

const router = express.Router()

router.use(protect);

router.route('/').get(getAllChats)

router.route('/:id').get(getAllMessages)
                          .put(saveMessage)
export default router