const { model, Schema } = require('mongoose')

const todoSchema = new Schema({
    //const commentSchema = new Schema({
        //author: {required: false, type: String}
    title: {required: true, type: String},
    //comment: {required: false, type: String},
    completed: { required: true, type: String}
    //likes: {type:Number, default:0}
}, {
    timestamps: true
})
//})
const Todo = model('Todo', todoSchema)
//const Comment = model('Comment', commentSchema)

module.exports = Todo;
//modeule.exports = Comment
