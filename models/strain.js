
const { Schema, model } = require('mongoose')

const strainSchema = new Schema({
     name: String, 
     type: String, 
     source: String, 
     setting: String,
     image: String, 
     format: String,
     stoner: String, 
     impressions: String,
     other: String
}, {
timestamps: true
})

module.exports = model('NewStrain', strainSchema)