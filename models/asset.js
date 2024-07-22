
const { Schema, model } = require('mongoose')

const assetSchema = new Schema({
     symbol: String, 
     purchasePrice: String, 
     shares: String, 
     principalDate: String
    

}, {
timestamps: true
})

module.exports = model('Asset', assetSchema)