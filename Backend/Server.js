const express= require('express')
const crypto = require("crypto");
const app= express()
require('./Config')
const form = require('./FormData')
var instance = require( './Razorpay')
const path = require('path');

app.use(express.json())
const cors=require('cors');
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use(express.static('Frontend/build'))



app.listen(process.env.PORT || 3000);
app.post('/formdata',async(req,resp)=>{
    let data= new form({
        name: req.body.name,
        email: req.body.email,
        Town: req.body.Town,
        Number: req.body.Number
    })
    
    if(data.Number.length != 10){
        resp.json('enter ce')
        // console.log('enter correct value')
        // console.log(Number)
        

    }
      
    else{
 data=await data.save();
    console.log(data)
    resp.send(data)
    }   
})


  app.post('/Order',async(req,resp)=>{
    const option={
        amount:Number(req.body.amount*100),
        currency:"INR"
    };
    const order= await instance.orders.create(option)
    console.log(order)
    resp.status(200).json({
        success:true,
        order,
    })
  })

  app.get('/key',(req,resp)=>{
    resp.json({key:'rzp_test_OmCfFJhnp3Fztn'})

  })
  app.post('/verification', async (req, resp) => {
    const {razorpay_order_id , razorpay_payment_id , razorpay_signature} =
req.body;

const body = razorpay_order_id + "|" + razorpay_payment_id;
  req.body;

  const expectedSignature = crypto
  .createHmac("sha256" , 'wyTuLIkM1pDzjPnYg9E3NV6E')
  .update(body.toString())
  .digest("hex")

  const isAuthentic = expectedSignature === razorpay_signature;
  
  if(isAuthentic){
    resp.redirect('http://localhost:3000/paymentform')
    app.post('/formdata',async(req,resp)=>{
        let data= form.create({
            name: req.body.name,
            email: req.body.email,
            Town: req.body.Town,
            Number: req.body.Number,
            razorpay_order_id:razorpay_order_id,
            razorpay_payment_id:razorpay_payment_id,
            razorpay_signature:  razorpay_signature,

        })
        
        if(data.Number.length != 10){
            resp.json('enter ce')
            // console.log('enter correct value')
            // console.log(Number)
            
    
        }
          
        else{
     data=await data.save();
        console.log(data)
        resp.send(data)
        }   
    })
    
    
  }
  else{
    resp.status(400).json({
      success:false,
        
      })
  }
  
  
  resp.status(200).json({
    success:true,
      
    })
});
