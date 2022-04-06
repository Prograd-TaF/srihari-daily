const data=require('./data.js')
//console.log(data('hi',2022,'BTECH'));
const obj=data('hi',2022,'BTECH');
console.log(obj);
obj.userid=1;
obj.username='srihari'
obj.password='welcome'
console.log(JSON.stringify(obj));
const fs=require('fs');
/*const rstream=fs.readFileSync('./data.js','utf-8',(err,data)=>{
    if(!err){
    console.log(data)
    }
    else{
        console.log(err)
    }
})*/
fs.writeFileSync('./message.txt',JSON.stringify(obj),(err)=>{
    if(!err){
        console.log('sucessfully written');
    }
    else{
        console.log(err);
    }
})
