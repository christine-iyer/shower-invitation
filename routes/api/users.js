const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')


// router.delete('/:id', userCtrl.deleteUser, userCtrl.respondWithUser)
router.put('/:id', userCtrl.updateUser, userCtrl.respondWithUser)
router.post('/', userCtrl.createUser, userCtrl.respondWithUser)
router.get('/:id', userCtrl.getUsers, userCtrl.respondWithUser)
router.get('/', userCtrl.getUsers, userCtrl.respondWithUsers)
module.exports = router