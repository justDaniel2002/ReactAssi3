const router = require("express-promise-router")()

const BrandController = require('../controller/brandController')



router.route('/')
    .get(BrandController.index)

module.exports = router