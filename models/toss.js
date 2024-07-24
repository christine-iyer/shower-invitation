const { Schema, model } = require('mongoose');

const tossSchema = new Schema({
     name: String, 
     winner: String, 
     margin: Number, 
     date: Date},
{timestamps: true})

module.exports = model('Toss', tossSchema);
