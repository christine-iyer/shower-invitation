// const mongoose = require('mongoose'); 
// const { Schema, model, models } = mongoose; // Import models to check if User is already defined

// const userSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, unique: true, trim: true, lowercase: true, required: false },
//   password: { type: String, trim: true, minlength: 3, required: false }
// }, { timestamps: true });

// // Check if model already exists to avoid OverwriteModelError
// const User = models.User || model('User', userSchema);

// module.exports = User;
// models/user.js
const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: { 
    type: String, 
    unique: true, 
    sparse: true,
    lowercase: true 
  },
  password: { 
    type: String,
    // Not required for OAuth users
  },
  googleId: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

// Check if model already exists to avoid OverwriteModelError
const User = models.User || model('User', userSchema);

module.exports = User;