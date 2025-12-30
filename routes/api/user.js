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

// ========== USER CRUD ROUTES ==========
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);
router.get('/', userController.listUsers);

// ========== GOOGLE OAUTH ROUTES ==========
router.get('/auth/google', (req, res, next) => {
  console.log('=== Initiating Google OAuth ===');
  passport.authenticate('google', { 
    scope: ['profile', 'email']
  })(req, res, next);
});

// LOWERCASE callback - matches Google Cloud Console
router.get('/auth/google/callback',  // ✓ lowercase
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
      
      // Capital C for FRONTEND route
      res.redirect(`${FRONTEND_URL}/Callback?token=${token}`);
    } catch (error) {
      console.error('❌ Google callback error:', error);
      res.redirect(`${FRONTEND_URL}/Callback?error=auth_failed`);
    }
  }
);

router.get('/me', async (req, res) => {
  try {
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

    const userId = decoded.id || decoded.userId || decoded._id;
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      googleId: user.googleId
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

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

module.exports = router;