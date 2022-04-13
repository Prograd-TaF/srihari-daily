const express=require('express');
const app=express();
const mongoose=require('mongoose');
//const router=express.Router();
const User=require('./database')
const dburl='mongodb+srv://srihari:Srihari@cluster0.mdwq6.mongodb.net/db3?retryWrites=true&w=majority';
mongoose.connect(dburl);
app.use(express.json());
const userRouter=require('./route');
app.use('/user',userRouter);
/*app.get('/all',async(req,res)=>{
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
})*/
app.listen(3000,()=>console.log('listening'));