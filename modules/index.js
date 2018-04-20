const mongoose = require(mongoose);
const config=require('../config');
const Schema = mongoose.Schema;

mongoose.connect(config.mongodb.connect,{}).then(() => {
    console.log('monggoose连接成功')
})

const schema = new Schema({
    a:{
        typr:String,
        required:true
    }
},{
    versionKey:false,
    collection:'test'
})

module.exports={test:mongoose.model('test',schema)}