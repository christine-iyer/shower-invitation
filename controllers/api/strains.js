     require('dotenv').config()
     const Strain = require('../../models/strain')
     
     const destroyStrain = async (req, res, next) => {
          try {
              const deletedStrain = await Strain.findByIdAndDelete(req.params.id)
              res.locals.data.strain = deletedStrain
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })
          }
      }

      const updateStrain = async (req, res, next) => {
          try {
              const updatedStrain = await Strain.findByIdAndUpdate(req.params.id, req.body, { new: true })
              res.locals.data.strain = updatedStrain
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })
          }
      }

      const createStrain = async (req, res, next) => {
          try {
              const createdStrain = await Strain.create(req.body)
              res.locals.data.strain = createdStrain
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })
          }
      }
      //hi
      const getStrains= async (req, res, next) => {
          try {

              const strains = await Strain.find(req.body)
              res.locals.data.strains = strains 
              strains.reverse()
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })
          }
      }
      const respondWithStrains = (req, res) => {
          res.json(res.locals.data.strains)
      }

      const respondWithStrain = (req, res) => {
          res.json(res.locals.data.strain)
      }
      
      
      
      module.exports = {
          destroyStrain,
          updateStrain,
          getStrains,
          createStrain,
          respondWithStrain, 
          respondWithStrains
      }