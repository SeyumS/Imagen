import express from 'express'
import {getAllPostsOfPinboard,pinPost,getAllPinboards,createNewPinboard,addPost,removePost} from './../controllers/pinController.js';
import { updatePinBoardId } from '../controllers/userController.js';
import {protect} from './../controllers/authController.js';

const router = express.Router() 

router.route('/:id').get(getAllPostsOfPinboard).patch(addPost)
router.route('/').get(getAllPinboards).post(createNewPinboard)
/* id bei zweter route entfernen*/

router.use(protect)

router.route('/:id').put(pinPost)


router.route('/:id/posts/:postId').delete(removePost)

router.route()

export default router;