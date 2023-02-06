const express=require('express')

const app=express()

const mClient=require('mongodb').MongoClient

const DBurl='mongodb+srv://nagasainithin:nithin1239@cluster0.vdj3e.mongodb.net/?retryWrites=true&w=majority'

mClient.connect(DBurl)
.then((client)=>{
    console.log("Connection successful")
    let dbObj=client.db('demo')
    let userObj=dbObj.collection('usercollection')
    app.set('userObj',userObj);
})
.catch(err=>console.log('error in connection ', err))

const userApp=require('./userApi')

app.use('/users',userApp)

//Handle invalid Paths
app.use((req,res,next)=>{
    res.send({message:`Invalid path ${req.url}`})
})

//Handling errors

app.use((err,req,res,next)=>{
    res.send({message:`error occured ${err.message}`})
})


app.listen(3000,()=>console.log("Server is Listining"))