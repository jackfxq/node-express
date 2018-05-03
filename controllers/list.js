const db = require ('../modules/index')

module.exports={
  findAll,
  update,
  create,
  find
}

function create(req,res,next) {
  let id=+new Date();
  db.list.create({
    id:id,
    str:'',
    title:'',
    abstract:''
  },() => {
    next({code:0,data:{id:id}})
  })
}

function update(req,res,next) {
  let id = req.body.id;
  let str = req.body.str;
  let title = req.body.title;
  let abstract = req.body.abstract;
  db.list.update({id:id},{
    $set:{
      str:str,
      title:title,
      abstract:abstract
    }
  },{
    upsert:true
  },() => {
    next({code:0,data:'success'});
  })
}

function findAll(req,res,next) {
  db.list.find({},{id:1,str:1,title:1,abstract:1, _id:0 },(err,data) => {
      // console.log(data)
      next({code:0,data:data})
  })
}

function find(req,res,next) {
  let id = req.query.id
  console.log(id)
  db.list.find({id:id},{id:1,str:1,title:1,abstract:1, _id:0 },(err,data) => {
      // console.log(data)
      next({code:0,data:data})
  })
}
