
const { Schema, model } = require('mongoose')

const bevvySchema = new Schema({
     theCock: String, 
     theIngredients: [], 
     theRecipe: String, 
     theJpeg: String,
     theComment: String,
 }, {
timestamps: true
})

module.exports = model('Bevvy', bevvySchema)