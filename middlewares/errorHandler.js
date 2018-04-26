module.exports=function(err, req, res, next){
  // console.log(err)
  // res.render('error', { error: err });
  res.send(err);
}
