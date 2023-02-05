const express=require('express')
const userApp=express.Router();

userApp.use(express.json())


userApp.post('/createuser',async(req,res)=>{
let userObj=req.app.get('userObj')
console.log(req.body)
let result=await userObj.insertOne(req.body)
res.send({message:'data is added'})

})


module.exports=userApp;