const Brand = require('../models/Brand')

const index = async (req, res, next) =>{
    //call back
    await Brand.find()
        .then((brands) =>{
            return res.status(200).json({ brands })
        })
}

module.exports = {
    index
}