const router = require('express').Router()
const haikuCtrl = require('../../controllers/api/haikus')


router.delete('/:id', haikuCtrl.deleteHaiku, haikuCtrl.respondWithHaiku)
router.put('/:id', haikuCtrl.updateHaiku, haikuCtrl.respondWithHaiku)
router.post('/', haikuCtrl.createHaiku, haikuCtrl.respondWithHaiku)
router.get('/:id', haikuCtrl.getHaikus, haikuCtrl.respondWithHaiku)
router.get('/', haikuCtrl.getHaikus, haikuCtrl.respondWithHaikus)
module.exports = router