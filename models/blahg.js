const { Schema, model } = require('mongoose')

const blahgSchema = new Schema({
     author: String, 
     title: String, 
     category: String, 
     text: String,
     image: String 
}, {
timestamps: true
})

module.exports = model('NewBlahg', blahgSchema)