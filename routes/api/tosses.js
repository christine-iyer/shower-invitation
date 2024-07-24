const router = require('express').Router()
const tossCtrl = require('../../controllers/api/tosses')

router.put('/:id', tossCtrl.updateToss, tossCtrl.respondWithToss)
router.post('/', tossCtrl.createToss, tossCtrl.respondWithToss)
router.get('/:id', tossCtrl.getTosses, tossCtrl.respondWithToss)
router.get('/', tossCtrl.getTosses, tossCtrl.respondWithTosses)
module.exports = router
