//const comment = require('./comment')
const { Schema, model } = require('mongoose')

const blahgSchema = new Schema({
     author: String, 
     title: String, 
     category: String, 
     text: String,
     image: String 
     //   likes: { type: Number, default: 0 },
 // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],

}, {
timestamps: true
})

module.exports = model('Blahg', blahgSchema)