const { Schema, model } = require('mongoose')

const haikuSchema = new Schema({
  author: {type:String, required: true },
  one: { type: String, required: true },
  two: { type: String, required: true },
  three: { type: String, required: true }, 
  like: {type: Number, default: 0}
 
}, {
  timestamps: true
})

module.exports = model('Haiku', haikuSchema)