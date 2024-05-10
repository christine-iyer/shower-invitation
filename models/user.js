//this is presuming a user sets a color in their profile.
// title: {type: String, required: false},
//   color: {type: String, required: false},
require('dotenv').config()
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const SALT_ROUNDS = 6

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true, trim: true, lowercase: true, required: true },
  password: { type: String, trim: true, minLength: 3, require: true },
  haikus: [{ type: Schema.Types.ObjectId, ref: 'Haiku' }],
  consent: {type: Boolean}
}, {
  timestamps: true,
  toJSON: {
    transform (doc, ret) {
      delete ret.password
      return ret
    }
  }
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  const password = crypto.createHmac('sha256', process.env.SECRET).update(this.password).digest('hex').split('').reverse().join('')
  this.password = await bcrypt.hash(password, SALT_ROUNDS)
})

module.exports = model('User', userSchema)