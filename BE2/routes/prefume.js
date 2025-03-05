const router = require("express-promise-router")()

const PrefumeController = require('../controller/prefumeController')



router.route('/')
    .get(PrefumeController.index)
    .post(PrefumeController.newPrefume)

router.route('/search')
    .post(PrefumeController.index)

router.route('/:prefumeID')
    .put(PrefumeController.updatePrefume)

module.exports = router