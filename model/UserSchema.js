const mongoose =require('mongoose');
const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
     Password:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
     role:{
        type:Array,
        required:true
    },
     isActive:{
        type:Boolean,
        required:true
     }
    
});
module.exports=mongoose.model('User',UserSchema);