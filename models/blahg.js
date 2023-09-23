const Todo = require('./todo')
const { Schema, model } = require('mongoose')

const blahgSchema = new Schema({
     author: String, 
     title: String, 
     category: String, 
     text: String,
     image: String, 
     likes: Number, default:0
    //  todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
 

}, {
timestamps: true
})

module.exports = model('NewBlahg', blahgSchema)