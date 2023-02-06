# Steps to Connect Mongobd with API

## Steps to cover Before connection

    Create Data Base User  in data Base Access
    register our local computer ip address with MONGO Db by 0.0.0.0/0

## Steps to Connect

#### Get Connection URL

    In data Base click Connect

    in App.js

    const DBurl=''
    and in url update username and password

## Connectiong with Mongo Db server

### Step 1:

Install and import mongobd client

    npm install mongodb

    const mClient=require('mongodb').MongoClient

### step 2:

Call connect method on Mongo Client

If connection is successful it return client

    mClient.connect(DBurl)
    .then((client)=>{
    console.log("Connection Success)
    })
    .catch(
    (err)=>{
    console.log(`Error in connection ${err}`)
    })

### step 3:

create db object and get collection objects

    let dbObj=client.db('db-name')
    let collectionObj=dbObj.collection('collection-name')

### Step 4:

Share the collection Objects to respective APIs

    app.set('key',value)
    app.set('collectionObj',collectionObj)

### Step 4:

Get collection object in the API

    let collectionObj=request.app.get('collectionObj')

### step 5:

Inserting Data into DataBase

    app.get('/createuser',(req,res)=>{
        let collectionObj=request.app.get('collectionObj')
        let prodObj=req.body
        collectionObj.insertOne({},(err,res)=>{
            if(err){
                console.log('Error occured',err)
            }
            else{
                res.send({message:'product created '})
            }
        })
    })


    app.get('/createuser',(req,res)=>{
        let collectionObj=request.app.get('collectionObj')
        let prodObj=req.body
        collectionObj.insertOne({})
        .then()
        .catch()

    })



    app.get('/createuser',async(req,res)=>{
        let collectionObj=request.app.get('collectionObj')
        let prodObj=req.body
        let result= await collectionObj.insertOne({})
        res.send({message:'product created '})

    })
