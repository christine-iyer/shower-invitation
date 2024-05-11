const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')


/*
/api/users
SignUp
*/
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

module.exports = router
