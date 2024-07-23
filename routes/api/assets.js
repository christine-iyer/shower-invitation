const express = require('express')
const router = express.Router()
const portfolioController = require('../../controllers/api/dataController')
//const portfolioIndex = require('../../controllers/api/viewController')


router.get('/', portfolioController.get, portfolioController.portfolioIndex)
router.post('/', portfolioController.createAsset, portfolioController.portfolioIndex)
module.exports = router 