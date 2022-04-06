//console.log('hi')
/*try{
    console.log('try1');
}
catch(err){
    console.log('error');
}*/
/*var fs=require('fs')
fs.readFile('wallet.html',(err,data)=>{
    if(err){
        console.log('error')
    }
    else{
        console.log(data.toString());
    }
})*/
/*function sum(a,b){
    return new Promise((res,rej),()=>{
        if(a+b>10){
            const result=a+b;
            res(result)
        }
        else{
            rej('result should be greater than 10')
        }
    })
    
}
.then((result)=>console.log(result))
.catch((err)=>console.log(err))
sum(5,3)*/
setTimeout( function welcome(){
     throw new Error('welcomes')
},1000)
async function hello(){
    try{
      var hey=await welcome()
      console.log(hey)
    }
    catch(e){
      console.log('hi')
    }
}
hello()
