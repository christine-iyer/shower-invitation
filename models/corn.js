const { Schema, model } = require('mongoose')

const cornSchema = new Schema({
  yellowRaw: {type:Number, required: true, default: 100 },
  whiteRaw: {type:Number, required: true, default: 75 },
  blueRaw: {type:Number, required: true, default: 25 },
  yellowCooked: {type:Number, required: true, default: 85 },
  whiteCooked: {type:Number, required: true, default: 60 },
  blueCooked: {type:Number, required: true, default: 17 },
  yellowProduction: {type:Number, required: true, default: 180 },
  whiteProduction: {type:Number, required: true, default: 90 },
  blueProduction: {type:Number, required: true, default: 60 },
  setUpTime: {type:Number, required: true, default: 30 },
  cleanUpTime: {type:Number, required: true, default: 30 } 
}, {
  timestamps: true
})

module.exports = model('Corn', cornSchema)

