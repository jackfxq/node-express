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

function express(req, res) {
  db.test.find({},(err,data) => {
      console.log(data)
      res.send(`Hello node-express${data}`);
  })
}
