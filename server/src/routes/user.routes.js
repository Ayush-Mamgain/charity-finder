const userRouter = require('express').Router();
const { registerUser, loginUser, logoutUser, isLoggedIn, getUserProfile, getDonations, updateBookmark } = require('../controllers/user.controllers');
const { verifyToken, authN } = require('../middlewares/auth.middleware');


userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

//secured routes
userRouter.get('/getLoginStatus', authN, isLoggedIn);
userRouter.post('/logout',verifyToken, logoutUser);
userRouter.get('/getUserProfile', verifyToken, getUserProfile);
userRouter.get('/getDonations', verifyToken, getDonations);
userRouter.put('/updateBookmark', verifyToken, updateBookmark);
module.exports = userRouter;