const router = require('express').Router()
const blahgCtrl = require('../../controllers/api/blahgs')


router.delete('/:id', blahgCtrl.destroyBlahg, blahgCtrl.respondWithBlahg)
router.put('/:id', blahgCtrl.updateBlahg, blahgCtrl.respondWithBlahg)
router.post('/', blahgCtrl.createBlahg, blahgCtrl.respondWithBlahg)
router.get('/:id', blahgCtrl.getBlahgs, blahgCtrl.respondWithBlahg)
router.get('/', blahgCtrl.getBlahgs, blahgCtrl.respondWithBlahgs)
module.exports = router
