const mongoose = require('mongoose');
const config=require('../config');
const Schema = mongoose.Schema;
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

module.exports={test:mongoose.model('test',schema)}
