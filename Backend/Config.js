const mongoose = require('mongoose')
const db = "mongodb+srv://Atraski:Atraski%402023@cluster0.m18k9sz.mongodb.net/Atraski?retryWrites=true&w=majority"
module.exports=mongoose.connect(db).then((then)=>{
    console.log("Connected to database")
}).catch((e)=>{
    console.log(e)
})
