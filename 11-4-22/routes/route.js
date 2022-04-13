const express=require('express');
const app=express.Router();
const User=require('./database')
const bcrypt=require('bcrypt');
/*router.get('/all',async(req,res)=>{
 const data= await User.find({});
 console.log(data);
 res.json(data);
})
router.post('/newdata',async(req,res)=>{
    const data= await req.body.user;
    const newUser= new User(data);
    await newUser.save();
    console.log(newUser);
    res.json(newUser);
})*/
app.get('/all',async(req,res)=>{
    const data= await User.find({});
    console.log(data);
    res.json(data);
   })
   app.post('/newdata',async(req,res)=>{
       const data= await req.body.user;
       console.log(data);
       const user=await User.exists({email:data.email});
       if(!user){
       const newUser= new User(data);
       await newUser.save();
       console.log(newUser);
       res.json(newUser);
       }
       else{
           console.log('mail id exists');
           res.json('mail id exists');
       }
   })
   module.exports=app;