require('dotenv').config();
const Toss = require("../../models/toss");

const updateToss = async (req, res, next) => {
     try {
         const updatedToss = await Toss.findByIdAndUpdate(req.params.id, req.body, { new: true })
         res.locals.data.toss = updatedToss
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const createToss = async (req, res, next) => {
     try {
         const createdToss = await Toss.create(req.body)
         res.locals.data.toss = createdToss
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 //hi
 const getTosses= async (req, res, next) => {
     try {
         
         const tosss = await Toss.find(req.body)
         res.locals.data.tosss = tosss 
         tosss.reverse()
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 const respondWithTosses = (req, res) => {
     res.json(res.locals.data.tosss)
 }
 
 const respondWithToss = (req, res) => {
     res.json(res.locals.data.toss)
 }
 
 
 
 module.exports = {
     updateToss,
     getTosses,
     createToss,
     respondWithToss, 
     respondWithTosses
 }