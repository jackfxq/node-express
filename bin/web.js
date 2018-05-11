// 生成一个express实例app
let express = require('express');
let router = require('../routes/router')
let errorHandler = require('../middlewares/errorHandler')
let bodyParser = require('body-parser');
let config = require('../config')
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var identityKey = 'skey';

let app = express();

app.all('*', function(req, res, next) {
    console.log(req.get('Origin'),config.accessControlAllowOrigin.includes(req.get('Origin')),config.accessControlAllowOrigin)
    
    if(config.accessControlAllowOrigin.includes(req.get('Origin'))){
	res.header("Access-Control-Allow-Credentials",  true)
        res.header("Access-Control-Allow-Origin", req.get('Origin'));
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    
    next();
});

app.use('/public',express.static('public'));

app.use(session({
    name: identityKey,
    secret: 'chyingp',  // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 60 * 60 * 1000  // 有效期，单位是毫秒
    }
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.use(errorHandler);


// 导出app实例，供其他模块调用
module.exports = app;
