const express=require('express')
const userApp=express.Router();
const expressAsyncHandler=require('express-async-handler')

userApp.use(express.json())

userApp.get('/getusers',expressAsyncHandler(async(req,res)=>{
let userObj=req.app.get('userObj')
let result=await userObj.find().toArray()
res.send({message:'Successfully retrived',payload:result})

}))


userApp.get('/getuser/:id',expressAsyncHandler(async(req,res)=>{
let userObj=req.app.get('userObj')
let id=req.params.id
let result=await userObj.findOne({id:id})
console.log(result)
if (result==undefined){
    res.send({message:`No Data Found with id= ${id}`})
}
else{
res.send({message:'Successfully retrived',payload:result})
}
}))


userApp.post('/createuser',expressAsyncHandler(async(req,res)=>{
let userObj=res.app.get('userObj')
console.log(req.body)
let result=await userObj.insertOne(req.body)
res.send({message:'data is added'})

}));

userApp.put('/updateuser',expressAsyncHandler(async(req,res)=>{
let userObj=res.app.get('userObj')
let modifiedObj=req.body;
let result=await userObj.updateOne({id:modifiedObj.id},{$set:{...modifiedObj}})
res.send({message:'data is modified'})

}));

userApp.delete('/deleteuser/:id',expressAsyncHandler(async(req,res)=>{

    let userObj=req.app.get('userObj')
    let idx=req.params.id
    await userObj.deleteOne({id:idx})
    res.send({message:`user with idx=${idx} deleted successfully`})

}))


module.exports=userApp;