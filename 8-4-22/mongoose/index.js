const express=require('express');
const app=express();
const User=require('./schema.js');
const mongoose=require('mongoose');
let dburl='mongodb+srv://srihari:Srihari@cluster0.mdwq6.mongodb.net/db2?retryWrites=true&w=majority'
mongoose.connect(dburl);
async function run(){
    const user=await  User.create({
        name:'sri',
        age:'21',
        email:'hi@gmail.com',
    })
     
     console.log(user);
}
run()
