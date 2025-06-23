import express from 'express'
import {getAllMessages,getAllChats,saveMessage} from './../controllers/messageController.js';
import {protect} from './../controllers/authController.js';

const router = express.Router()

router.use(protect);

router.route('/:id').get(getAllChats)

router.route('/:id/:chatid').get(getAllMessages)
router.route('/:id/:chatid').put(saveMessage)
export default router