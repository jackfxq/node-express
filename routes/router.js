const express = require('express')
const router = express.Router()
const test = require('../controllers/test')
const markdownEditor = require('../controllers/markdown')
const list = require('../controllers/list')
const login = require('../middlewares/login')
const user = require('../controllers/user')

router.get('/update', test.update)

router.get('/express', test.express);
router.post('/api/markdown', markdownEditor.markdownEditor);
router.post('/api/manage/create',login, list.create);
router.post('/api/manage/update',login, list.update);
router.get('/api/list/findAll', list.findAll);
router.get('/api/list/find', list.find);
router.get('/api/manage/find',login, list.find);
router.get('/api/manage/findAll',login, list.findAll);
router.post('/api/manage/remove',login, list.remove);
router.post('/login', user.login);
router.get('/logout', user.logout);
router.get('/getUserInfo',login, user.getUserInfo);

module.exports = router
