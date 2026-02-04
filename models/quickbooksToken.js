const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const quickbooksTokenSchema = new Schema({
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  realmId: { type: String, required: true },
  tokenType: { type: String, default: 'bearer' },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Only keep one token record (singleton pattern)
quickbooksTokenSchema.index({ realmId: 1 }, { unique: true });

const QuickBooksToken = model('QuickBooksToken', quickbooksTokenSchema);
module.exports = QuickBooksToken;