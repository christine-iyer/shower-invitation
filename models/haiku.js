const { Schema, model } = require('mongoose')

const haikuSchema = new Schema({
  author: {type:String, required: true },
  one: { type: String, required: true },
  two: { type: String, required: true },
  three: { type: String, required: true }, 
  title: {type: String, required: false},
  color: {type: String, required: false},
  like: {type: Number, default: 0}, 
  comment: {type: String, required: false}
 
}, {
  timestamps: true
})

module.exports = model('Haiku', haikuSchema)