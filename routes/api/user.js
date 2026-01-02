const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/user.js');
const passport = require('../../config/passport');
const { generateToken } = require('../../utils/jwt');
const User = require('../../models/user');

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://book-app-front-lake.vercel.app';

// ========== AUTHENTICATION ROUTES ==========
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// ========== GOOGLE OAUTH ROUTES (Before dynamic :id routes) ==========
router.get('/auth/google', (req, res, next) => {
  console.log('=== Initiating Google OAuth ===');
  passport.authenticate('google', { 
    scope: ['profile', 'email']
  })(req, res, next);
});

router.get('/auth/google/callback',
  (req, res, next) => {
    console.log('=== Google Callback Received ===');
    passport.authenticate('google', { 
      failureRedirect: `${FRONTEND_URL}/Callback?error=auth_failed`,
      session: false
    })(req, res, next);
  },
  async (req, res) => {
    try {
      console.log('=== Processing authenticated user ===');
      const user = req.user;
      
      if (!user) {
        console.error('No user in request after authentication');
        return res.redirect(`${FRONTEND_URL}/Callback?error=no_user`);
      }
      
      console.log('User authenticated:', user.username);
      
      const token = generateToken(user);
      console.log('Token generated, redirecting to frontend');
      
      res.redirect(`${FRONTEND_URL}/Callback?token=${token}`);
    } catch (error) {
      console.error('❌ Google callback error:', error);
      res.redirect(`${FRONTEND_URL}/Callback?error=auth_failed`);
    }
  }
);

// Debug route
router.get('/auth/debug', (req, res) => {
  res.json({
    hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    frontendUrl: process.env.FRONTEND_URL,
    backendUrl: process.env.BACKEND_URL,
    callbackUrl: `${process.env.BACKEND_URL || 'https://franky-app-ix96j.ondigitalocean.app'}/api/user/auth/google/callback`
  });
});

// ========== SPECIFIC ROUTES (MUST come before /:id) ==========
// @route   GET /api/user/me
// @desc    Get current user from token
router.get('/me', async (req, res) => {
  try {
    console.log('=== GET /me endpoint hit ===');
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const { verifyToken } = require('../../utils/jwt');
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    console.log('Token decoded:', decoded);
    
    // The decoded token should have the user id
    const userId = decoded.id || decoded.userId || decoded._id;
    
    if (!userId) {
      console.error('No user ID found in token:', decoded);
      return res.status(401).json({ message: 'Invalid token structure' });
    }
    
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user.username);

    // Return user data in the format your frontend expects
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      googleId: user.googleId
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all users (list)
router.get('/', userController.listUsers);

// ========== DYNAMIC ROUTES (MUST come LAST) ==========
// These catch any GET /api/user/:id
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;