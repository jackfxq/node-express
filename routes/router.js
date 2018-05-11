const express = require('express')
const router = express.Router()
const test = require('../controllers/test')
const markdownEditor = require('../controllers/markdown')
const list = require('../controllers/list')
const login = require('../middlewares/login')
const user = require('../controllers/user')
const upload = require('../controllers/upload')
var multer  = require('multer')
var crypto = require('crypto');
var md5 = crypto.createHash('md5');

var uploadImage = multer({
    storage:  multer.diskStorage({
        // 如果你提供的 destination 是一个函数，你需要负责创建文件夹
        destination: 'public/uploads',
        //给上传文件重命名，获取添加后缀名
        filename: function (req, file, cb) {
            console.log(file)
            cb(null,  file.originalname);
         }
    })
});//定义图片上传的临时目录

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
router.post('/upload/image',uploadImage.single('file'), upload.image);

module.exports = router
