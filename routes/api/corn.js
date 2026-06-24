const router = require('express').Router()
const cornCtrl = require('../../controllers/api/corn')


router.delete('/:id', cornCtrl.deleteCorn, cornCtrl.respondWithCorn)
router.put('/:id', cornCtrl.updateCorn, cornCtrl.respondWithCorn)
router.post('/', cornCtrl.createCorn, cornCtrl.respondWithCorn)
router.get('/:id', cornCtrl.getCorn, cornCtrl.respondWithCorn)
router.get('/', cornCtrl.getCorn, cornCtrl.respondWithCorn)
router.delete('/:id', cornCtrl.deleteCorn, cornCtrl.respondWithCorn)
router.get('/:id', cornCtrl.getCorn, cornCtrl.respondWithCorn)   
module.exports = router