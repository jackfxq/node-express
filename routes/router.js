const express = require('express')
const router = express.Router()
const test = require('../controllers/test')

router.get('/update', test.update)

router.get('/express', test.express);

module.exports = router
