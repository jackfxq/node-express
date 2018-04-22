const marked = require('marked')

module.exports={
  markdownEditor
}

function markdownEditor(req, res,next) {
  console.log(req.body)
  let str = req.body.str
  let htmlStr = marked(str);
  console.log(htmlStr);
  next({code:0,data:{html:htmlStr}})
}
