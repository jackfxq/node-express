module.exports=function(req, res, next){
    let sess = req.session;
    console.log(sess)
    let loginUser = sess.loginUser;
    let isLogined = !!loginUser;
    console.log('islogin',isLogined)
    if(!isLogined){
        next({code:3,data:'请登录'});
    }else{
        next();
    }
}
