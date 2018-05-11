


module.exports={
    image
}

function image(req,res,next) {
    console.log(req.file)
    next({code:0,data:{imageSrc:`/${req.file.path}`}}); 
}