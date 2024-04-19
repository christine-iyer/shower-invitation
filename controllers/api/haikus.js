require('dotenv').config()
const Haiku = require('../../models/haiku')

const deleteHaiku = async (req, res, next) => {
    try {
        const deletedHaiku = await Haiku.findByIdAndDelete(req.params.id)
        res.locals.data.haiku = deletedHaiku
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateHaiku = async (req, res, next) => {
    try {
        const updatedHaiku = await Haiku.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.haiku = updatedHaiku
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createHaiku = async (req, res, next) => {
    try {
        const createdHaiku = await Haiku.create(req.body)
        res.locals.data.haiku = createdHaiku
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getHaikus = async (req, res, next) => {
    try {

        const haikus = await Haiku.find(req.body)
        res.locals.data.haikus = haikus
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
const respondWithHaikus = (req, res) => {
    res.json(res.locals.data.haikus)
}

const respondWithHaiku = (req, res) => {
    res.json(res.locals.data.haiku)
}
module.exports = {
    deleteHaiku,
    updateHaiku,
    getHaikus,
    createHaiku,
    respondWithHaiku,
    respondWithHaikus
}