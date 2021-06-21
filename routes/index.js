const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
// other routers go here...
router.use('/', require('./htmlRoutes.js'))
router.use('/', require('./categoryRoutes.js'))
router.use('/', require('./postRoutes'))

module.exports = router
