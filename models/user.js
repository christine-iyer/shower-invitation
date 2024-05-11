const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  author: {type:String, required: true },
  consent: { type: String, required: true },
  phone: { type: String, required: true }
 
}, {
  timestamps: true
})

module.exports = model('User', userSchema)