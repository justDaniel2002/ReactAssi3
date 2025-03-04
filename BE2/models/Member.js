const mongoose = require('mongoose');

const Schema = mongoose.Schema

const memberSchema = new Schema({
    membername: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false }
},
    { timestamps: true, });

const Member = mongoose.model('Member', memberSchema)
module.exports = Member