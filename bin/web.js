// 生成一个express实例app
let express = require('express');

let app = express();

app.get('/hello', function(req, res){
    res.send('Hello World');
  });


// 导出app实例，供其他模块调用
module.exports = app;