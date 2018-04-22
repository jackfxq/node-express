const express = require('express')
const router = express.Router()
const test = require('../controllers/test')
const markdownEditor = require('../controllers/markdown')
const list = require('../controllers/list')

router.get('/update', test.update)

router.get('/express', test.express);
router.post('/api/markdown', markdownEditor.markdownEditor);
router.post('/api/list/create', list.create);
router.post('/api/list/update', list.update);
router.get('/api/list/findAll', list.findAll);
router.get('/api/list/find', list.find);

module.exports = router
