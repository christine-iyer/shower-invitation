const express = require('express')
const router = express.Router()
const portfolioController = require('../../controllers/api/dataController')
const portfolioIndex = require('../../controllers/api/viewController')


router.get('/', portfolioController.get, portfolioIndex)
router.post('/', portfolioController.createAsset, portfolioIndex)
module.exports = router 