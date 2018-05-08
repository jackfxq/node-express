const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userName:String,
    pwd:String,
},{
  collection:'user'
})

module.exports={schema}