const mongoose = require('mongoose');

const Schema = mongoose.Schema

const commentSchema = new Schema({
    rating:{ type: Number, min: 1, max:3, require: true},
    content: {type: String, require: true},
    author:{ type: Schema.Types.ObjectId, ref: "Member", require: true }
   },{timestamps: true}
   )

const Comment = mongoose.model('Comment', commentSchema)
module.exports = {Comment, commentSchema}