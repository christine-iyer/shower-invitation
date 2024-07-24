const { Schema, model } = require('mongoose')

const assetSchema = new Schema({
     symbol: String, 
     purchasePrice: Number, 
     shares: Number, 
     principalDate: String
    

}, {
timestamps: true
})

module.exports = model('Asset', assetSchema)