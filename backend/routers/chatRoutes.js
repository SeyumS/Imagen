import express from 'express'
import {getAllMessages,getAllChats,saveMessage,createChat} from './../controllers/messageController.js';
import {protect} from './../controllers/authController.js';

const router = express.Router()

//router.use(protect);

router.route('/:id').get(getAllChats)

router.route('/:id/:chatid').get(getAllMessages)
                            .put(saveMessage)
                            .post(createChat)
export default router