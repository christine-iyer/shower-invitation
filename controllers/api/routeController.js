const express = require('express')
const router = express.Router()
const portfolioController = require('./dataController')
const portfolioIndex = require('./viewController')


router.get('/', portfolioController.get, portfolioIndex)
router.post('/', portfolioController.createAsset, portfolioIndex)
module.exports = router 