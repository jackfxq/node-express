const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id:String,
    str:String
},{
  collection:'list'
})

module.exports={schema}
