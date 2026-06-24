require('dotenv').config();
const Corn = require("../../models/corn");
const getCorn= async (req, res, next) => {
    try {
        
        const corn = await Corn.find(req.body)
        res.locals.data.corn = corn 
        corn.reverse()
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateCorn = async (req, res, next) => {
     try {
         const updatedCorn = await Corn.findByIdAndUpdate(req.params.id, req.body, { new: true })
         res.locals.data.corn = updatedCorn
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const createCorn = async (req, res, next) => {
     try {
         const createdCorn = await Corn.create(req.body)
         res.locals.data.corn = createdCorn
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 //hi

 const respondWithCorn = (req, res) => {
     res.json(res.locals.data.corn)
 }
 const deleteCorn = async (req, res, next) => {
     try {
         const deletedCorn = await Corn.findByIdAndDelete(req.params.id)
         res.locals.data.corn = deletedCorn
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }

 
 
 module.exports = {
     updateCorn,
     getCorn,
     createCorn,
     respondWithCorn,
     deleteCorn
 }