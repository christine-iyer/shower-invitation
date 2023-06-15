const { model, Schema } = require('mongoose')

const todoSchema = new Schema({
    name: {required: true, type: String},
    revp: { required: true, type: String}
}, {
    timestamps: true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo;