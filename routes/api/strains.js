const router = require('express').Router()
const strainCtrl = require('../../controllers/api/strains')


router.delete('/:id', strainCtrl.destroyStrain, strainCtrl.respondWithStrain)
router.put('/:id', strainCtrl.updateStrain, strainCtrl.respondWithStrain)
router.post('/', strainCtrl.createStrain, strainCtrl.respondWithStrain)
router.get('/:id', strainCtrl.getStrains, strainCtrl.respondWithStrain)
router.get('/', strainCtrl.getStrains, strainCtrl.respondWithStrains)
module.exports = router
