let db = require('../modules/index')
let users = require('../config/user').items;
let identityKey = 'skey';

let findUser = function(name, password){
    return users.find(function(item){
        return item.name === name && item.password === password;
    });
};

module.exports={
  login,
  logout,
  getUserInfo,
  createUser
}

function login(req,res,next) {
    let sess = req.session;
    let user = findUser(req.body.userName, req.body.pwd);

    if(user){
        req.session.regenerate(function(err) {
            if(err){
                return next({code: 2, data: '登录失败'});       
            }
            console.log(user.name)            
            req.session.loginUser = user.name;
            next({code: 0, data: {userName:user.name}});                           
        });
    }else{
        next({code: 1, data: '账号或密码错误'});
    }   
}

function logout(req,res,next) {
    req.session.destroy(function(err) {
        if(err){
            next({code: 2, data: '退出登录失败'});
            return;
        }
        
        // req.session.loginUser = null;
        res.clearCookie(identityKey);
        next({code: 0, data: '退出登录'});
    });
}

function getUserInfo(req,res,next) {
    let sess = req.session;
    let loginUser = sess.loginUser;
    next({code: 0, data: {userName:loginUser}});
}

function createUser() {
    
}
