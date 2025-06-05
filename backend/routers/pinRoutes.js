import express from 'express'
import {getAllPostsOfPinboard,/*pinPost,*/getAllPinboards,createNewPinboard,/*removePost*/} from './../controllers/pinController.js';
//import {protect} from './../controllers/authController.js';

const router = express.Router() 

router.route('/:id').get(getAllPostsOfPinboard)
router.route('/').get(getAllPinboards).post(createNewPinboard)
/*

router.use(protect)

router.route('/:id').put(pinPost)


router.route('/:id/posts/:id').delete(removePost)

router.route()*/

export default router;