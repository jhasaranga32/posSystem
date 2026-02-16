const mongoose =require('mongoose');
const PaymentSchema=new mongoose.Schema({
    order:{
        type:Object,
        required:true,
     
    },
    amount:{
        type:Number,
        required:true
    },
   tax:{ 
        type:Number,
        required:true
    },
     discount:{
        type:Number,
        required:true
    },
     extraCharges:{
        type:Array,
        required:true
     },
    DateView:{
        type:Date,
        required:true
 },

    transactionDetails:{
        type:Array,
        required:true
  }
});
module.exports=mongoose.model('Payment',PaymentSchema);