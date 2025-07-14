require('dotenv').config()
const Bevvy = require('../../models/bevvy')

const destroyBevvy = async (req, res, next) => {
     try {
         const deletedBevvy = await Bevvy.findByIdAndDelete(req.params.id)
         res.locals.data.bevvy= deletedBevvy
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const updateBevvy = async (req, res, next) => {
     try {
         const updatedBevvy = await Bevvy.findByIdAndUpdate(req.params.id, req.body, { new: true })
         res.locals.data.bevvy= updatedBevvy
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const createBevvy = async (req, res, next) => {
     try {
         const createdBevvy = await Bevvy.create(req.body)
         res.locals.data.bevvy= createdBevvy
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 //hi
 const getBevvies= async (req, res, next) => {
     try {
         
         const bevvies = await Bevvy.find(req.body)
         res.locals.data.bevvies = bevvies 
         bevvies.reverse()
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 const respondWithBevvy = (req, res) => {
     res.json(res.locals.data.bevvy)
 }
 
 const respondWithBevvies= (req, res) => {
     res.json(res.locals.data.bevvies)
 }
 
 
 
 module.exports = {
     destroyBevvy,
     updateBevvy,
     getBevvies,
     createBevvy,
     respondWithBevvy, 
     respondWithBevvies
 }