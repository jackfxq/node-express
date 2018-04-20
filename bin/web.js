// 生成一个express实例app
let express = require('express');
let test = require('../modules/index')

let app = express();

app.get('/hello', function(req, res){
    res.send('Hello World');
});

app.get('/express', function(req, res){
    console.log(test)
    test.find({},(data) => {
        console.log(data)
    })
    res.send('Hello node-express');
});


// 导出app实例，供其他模块调用
module.exports = app;