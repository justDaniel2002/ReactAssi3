const mongoose = require('mongoose');

const Schema = mongoose.Schema

const brandSchema = new Schema({ brandName: String},{ timestamps: true, });

const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand