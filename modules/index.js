const mongoose = require('mongoose');
const config=require('../../mongodb.js');
const Schema = mongoose.Schema;
const list = require('./list')
const user = require('./user')
console.log(config.mongodb.connect)

mongoose.connect(config.mongodb.connect,{}).then(() => {
    console.log('monggoose连接成功')
},(err) => {
  console.log(err)
})

const schema = new Schema({
    a:Number,
    b:Number
},{
  collection:'test'
})

module.exports={
  test:mongoose.model('test',schema),
  list:mongoose.model('list',list.schema),
  user:mongoose.model('user',user.schema)
}
