const mongoose =require('mongoose');
const CustomerSchema=new mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
     Address:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
     contact:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     isActive: {
        type:Boolean,
        required:true
    }
});
module.exports=mongoose.model('Customer',CustomerSchema);