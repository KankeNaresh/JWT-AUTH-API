const mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    role:String
})

//mongoose.model('ModelName', schema, 'collectionName');
mongoose.model('user',userSchema,'user');
//user: collection name
module.exports=mongoose.model('user')