// 生成一个express实例app
let express = require('express');
let db = require('../modules/index')
let router = require('../routes/router')

let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://111.230.35.213");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/', router);


// 导出app实例，供其他模块调用
module.exports = app;
