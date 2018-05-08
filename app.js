// 引入上面导出的app实例
let app = require('./bin/web');

// 引入debug模块，打印调试日志
let debug = require('debug')('blog:server');
let http = require('http');

// 设置端口号
let port = process.env.PORT || '3000';
app.set('port', port);

// 启动工程
let server = http.createServer(app);

// 监听端口号
server.listen(port,() => {
    console.log('Listening on port %d', port);
});

process.on('uncaughtException', function (err) {
    console.log(err);
})
