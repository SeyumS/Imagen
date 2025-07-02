import express from 'express'
import {getUser,getMe, updateMe, uploadUserPhoto,deleteMe,createUser,getAllUsers, updatePinBoardId} from './../controllers/userController.js';
import {signup, login, forgotPassword, 
resetPassword, updatePassword,protect} from './../controllers/authController.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser).patch(updatePinBoardId);

router.route('/me').get(protect, getMe)
 .patch(protect, updateMe)
 .put(protect, uploadUserPhoto)
 .delete(protect, deleteMe)

router.route('/:id').get(getUser);

router.post('/signup',signup)
router.post('/login',login);

router.post('/forgotPassword', forgotPassword)
router.patch('resetPassword', resetPassword)

router.use(protect)

router.patch('/updateMyPassword', updatePassword)



export default router