const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Brand = require('./Brand');

const { Comment, commentSchema } = require('./Comment');

const perfumechema = new Schema({
    perfumeName: { type: String, require: true },
    uri: { type: String, require: true },
    price: { type: Number, require: true },
    concentration: { type: String, require: true }, // nồng độ của nước hoa: Extrait, EDP, EDT,…
    description: { type: String, require: true },
    ingredients: { type: String, require: true },
    volume: { type: Number, require: true },
    targetAudience: { type: String, require: true },// male, femail, unisex
    comments: [commentSchema],
    brand: { type: Schema.Types.ObjectId, ref: "Brand", require: true },
}, { timestamps: true, });

const Perfume = mongoose.model('Perfume', perfumechema)
module.exports = Perfume