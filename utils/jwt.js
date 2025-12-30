// utils/jwt.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this';
const JWT_EXPIRE = '7d';

const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      username: user.username,
      email: user.email 
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };