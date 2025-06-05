import express from 'express'
import {getPost, getAllPosts, addLike, removeLike, addComment, deleteComment, createPost} from './../controllers/postController.js';
import {protect} from './../controllers/authController.js';

const router = express.Router() 

router.route('/').post(createPost)
                 .get(getAllPosts);
    

router.route('/:id').get(getPost);

router.use(protect);

router.route('/:id').patch(addLike)
              .delete(removeLike)

router.route('/:id/comment/').post(addComment)              
router.route('/:id/comment/:id')
                                .delete(deleteComment)

export default router
