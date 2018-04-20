let db = require('../modules/index')

module.exports={
  update,
  express
}

let num =0

function update(req, res) {
  db.test.update({a:2},{
    $set:{
      a:2,
      b:num++
    }
  },{
    upsert:true
  },() => {
    res.send('update');
  })
}

function express(req, res,next) {
  db.test.find({},{a:1,b:1, _id:0 },(err,data) => {
      // console.log(data)
      next({code:0,data:data})
  })
}
