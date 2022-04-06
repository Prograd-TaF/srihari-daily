/*const greet1=()=>{console.log('to')}
const greet2=()=>{console.log('T&F')}
const greet=()=>{
    {console.log('welcome')};
    setTimeout(greet1,1000);
    //greet1()
    greet2()
}
greet()*/
/*var fs=require('fs')

var obj={}

function do1(){
    return new Promise(function(res,rej){
        fs.readFile('file1.txt',function(err, data){
            if(!err){
                res(data.toString())
            }
        })

    })
}

function do2(){
    return new Promise(function(res,rej){
        fs.readFile('file2.txt',function(err, data){
            if(!err){
                res(data.toString())
            }
        })

    })
}


// do1().then(function(data){
//     obj['data1']=data
//     do2().then(function(data){
//         obj['data2']=data
//     })    
// })

async function result1(){
    obj['data1']=await do1()
    obj['data2']=await do2()
     console.log(obj);

}
result1()*/
function hello(){
    return new Promise((res)=>
    setTimeout(()=>res('hello')),1000);
}

async function greet(text,callback){
    
     console.log(text);
    const greet=await hello();
    console.log(greet);
    callback()
    
    
    console.log('how are you');
}
function greet1(){
    setTimeout(()=> console.log('welcome'),1000);
    
}
greet('hey',greet1)*/
var fs=require('fs');
function welcome(){
  return new Promise((res,rej)=>{
    fs.readFile('welcome.txt','utf-8',(err,data)=>{
        if(!err){
            res(data);
        }
        else{
            rej(err);
        }
    });
    
  }) 
  

}
welcome().then(
    result=>{
        console.log(result);
    },
    error=>{
        console.log(error)
    }
)

let p1=new Promise(function(res,rej){
    res('valid')
})
let p2=new Promise(function(res,rej){
    res('not valid')
})
let p3=new Promise(function(res,rej){
    res(20)
})

Promise.all([p1,p2,p3]).then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
// p1.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// p2.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// p3.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
