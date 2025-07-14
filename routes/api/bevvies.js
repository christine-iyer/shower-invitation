const router = require('express').Router()
const bevvyCtrl = require('../../controllers/api/bevvies')


router.delete('/:id', bevvyCtrl.destroyBevvy, bevvyCtrl.respondWithBevvy)
router.put('/:id', bevvyCtrl.updateBevvy, bevvyCtrl.respondWithBevvy)
router.post('/', bevvyCtrl.createBevvy, bevvyCtrl.respondWithBevvy)
router.get('/:id', bevvyCtrl.getBevvies, bevvyCtrl.respondWithBevvy)
router.get('/', bevvyCtrl.getBevvies, bevvyCtrl.respondWithBevvies)
module.exports = router
