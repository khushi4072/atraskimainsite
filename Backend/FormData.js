const mongoose= require('mongoose')
const info = new mongoose.Schema({
   name:String,
    email:String, 
        Town:String,
        Number:String,
        razorpay_order_id :String,
         razorpay_payment_id :String, 
         razorpay_signature:String


   

    
})
module.exports= mongoose.model('FormData',info);
