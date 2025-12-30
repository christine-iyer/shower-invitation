// const router = require('express').Router()
// const userController = require('../../controllers/api/user.js')

// router.post('/', userController.signUp )
// router.put('/:id', userController.updateUser )
// router.delete('/:id', userController.deleteUser )
// router.get('/:id', userController.getUser )
// router.get('/', userController.listUsers )

// module.exports = router
// routes/api/user.js
// routes/api/user.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/user.js');
const passport = require('../../config/passport');
const { generateToken } = require('../../utils/jwt');

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://book-app-front-lake.vercel.app';

// ========== AUTHENTICATION ROUTES ==========
// @route   POST /api/user/signup
// @desc    Create new user account
router.post('/signup', userController.signUp);

// @route   POST /api/user/login
// @desc    Login with email and password
router.post('/login', userController.login);

// @route   POST /api/user/logout
// @desc    Logout (client removes token)
router.post('/logout', userController.logout);

// ========== USER CRUD ROUTES ==========
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);
router.get('/', userController.listUsers);

// ========== GOOGLE OAUTH ROUTES ==========
// @route   GET /api/user/auth/google
// @desc    Initiate Google OAuth
router.get('/auth/google', 
  passport.authenticate('google', { 
    scope: ['profile', 'email']
  })
);

// @route   GET /api/user/auth/google/callback
// @desc    Google OAuth callback
router.get('/auth/google/callback',
  passport.authenticate('google', { 
    failureRedirect: `${FRONTEND_URL}/Callback?error=auth_failed` 
  }),
  async (req, res) => {
    // User authenticated successfully
    const user = req.user;
    
    // Generate JWT token
    const token = generateToken(user);
    
    // Redirect back to your frontend with token
    res.redirect(`${FRONTEND_URL}/Callback?token=${token}`);
  }
);
// @route   GET /api/user/auth/me
// @desc    Get current user from token
router.get('/auth/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const { verifyToken } = require('../../utils/jwt');
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const User = require('../../models/user');
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;