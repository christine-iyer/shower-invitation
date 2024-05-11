require('dotenv').config()
const User = require('../../models/user')


 
 const updateUser = async (req, res, next) => {
     try {
         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
         res.locals.data.user = updatedUser
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const createUser = async (req, res, next) => {
     try {
         const createdUser = await User.create(req.body)
         res.locals.data.user = createdUser
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 //hi
 const getUsers= async (req, res, next) => {
     try {
         
         const users = await User.find(req.body)
         res.locals.data.users = users 
         users.reverse()
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 const respondWithUsers = (req, res) => {
     res.json(res.locals.data.users)
 }
 
 const respondWithUser = (req, res) => {
     res.json(res.locals.data.user)
 }
 
 
 
 module.exports = {
     
     updateUser,
     getUsers,
     createUser,
     respondWithUser, 
     respondWithUsers
 }