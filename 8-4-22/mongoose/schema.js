const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true,
        
        validate:{
            validator:v=>(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(v),
            message:data=>`${data.value} is not  valid`,
        },

    }
})
let User=mongoose.model('User',userSchema)
module.exports=User