
const { Schema, model } = require('mongoose')

const bevvySchema = new Schema({
     name: String, 
     ingredients: [], 
     picture: String, 
     notes: String,
 }, {
timestamps: true
})

module.exports = model('Bevvy', bevvySchema)