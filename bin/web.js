// 生成一个express实例app
let express = require('express');
let router = require('../routes/router')
let errorHandler = require('../middlewares/errorHandler')
let bodyParser = require('body-parser');
let config = require('../config')

let app = express();

app.all('*', function(req, res, next) {
    console.log(req.get('Origin'),`${req.protocol}://${req.hostname}`,config.accessControlAllowOrigin.includes(`${req.protocol}://${req.hostname}`),config.accessControlAllowOrigin)
    
    if(config.accessControlAllowOrigin.includes(origin)){
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.use(errorHandler);


// 导出app实例，供其他模块调用
module.exports = app;
