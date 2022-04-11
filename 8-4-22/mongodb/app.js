const express=require('express');
const app=express();
const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
let dburl='mongodb+srv://srihari:Srihari@cluster0.mdwq6.mongodb.net/db1?retryWrites=true&w=majority';
app.use(express.json())
//To post one object  by method insertOne
app.post('/newdata',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    try{
        let db=await client.db('db1');
        let user=await db.collection('home').insertOne(req.body);
        res.json({
            message:'data sent',
            user
        })
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})
//To get all object  by method find
app.get('/existingdata/all',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    const id=req.params.id;
    try{
        let db=await client.db('db1');
        let user=await db.collection('home').find({}).toArray();
        res.json({
            message:'data sent',
            user
        })
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})
//To get one object using  its id by method find
app.get('/existingdata/:id',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    const id=req.params.id;
    try{
        let db=await client.db('db1');
        let user=await db.collection('home').find({'_id':new mongodb.ObjectId(id)}).toArray();
        //let name=user.name;
        //let name=user[0].name;
        res.json({
            message:'data received',
            user
        })
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})
/*app.get('/existingdata/:uname',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    const name=req.params.uname;
    console.log(name);
    try{
        let db=await client.db('db1');
        let user=await db.collection('home').findOne({name:JSON.stringify(req.params.uname)});
        let person=user.name;
        if(user){
            res.json({
                message:'data received',
                person
            })
        }
        else{
            console.log('error');
            res.send('error')
        }
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})*/
//To update a field in  one object using  its id by method updateOne
app.put('/existingdata/:id',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    const id=req.params.id;
    try{
        let db=await client.db('db1');
        let user=await db.collection('home').updateOne({"_id":new mongodb.ObjectId(id)},{$set:{"age":21}})
        console.log(user);
        res.json({
            message:'data updated',
            user
        })
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})
//To delete one object using  its id by method deleteOne
app.delete('/existinguser/:id',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    const id=req.params.id;
    try{
        let db=await client.db('db1');
        let user=await db.collection('home').deleteOne({"_id":new mongodb.ObjectId(id)})
        console.log(user);
        res.json({
            message:'data deleted',
            user
        })
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})
app.listen(3000,()=>{console.log('listening');})