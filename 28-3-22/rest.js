const http=require('http');
const url=require('url');
const fs=require('fs');

const persons=[
  {
    id:1,
    name:'srihari',          
    balance:100,
  },
  {
    id:2,
    name:'charan',
    balance:200,
  },
]

const server=http.createServer((request,response)=>{
  if(request.url==='/user' ){
    //const rstream=fs.createReadStream('./wallet.js','UTF-8');
    response.writeHead(200,{"content-Type":"application/json"});
    //rstream.pipe(response);
    response.end(JSON.stringify(persons))
    
}
else if (/\/user\/[a-zA-z]+\/balance/.test(request.url) && request.method==='GET'){
   const splits=request.url.split('/');
   const name=splits[splits.length-2] ;
   console.log(name)
   console.log('*******')
  
  for(let i=0;i<persons.length;i++){
    console.log(persons[i].name)
   if(persons[i].name==name){
     response.end(JSON.stringify(persons[i].balance))
   }
  }
  }
  else if(/\/user\/[a-zA-z]+\/deposit\/[0-9]+/.test(request.url) && request.method==='POST'){
    
    const splits=request.url.split('/');
    const name=splits[splits.length-3];
    const money=Number(splits[splits.length-1] );
    console.log(money)
    for(let j=0;j<persons.length;j++){
      
      if(persons[j].name==name){
         persons[j].balance+=money
          console.log(persons[j].balance)
          response.end(JSON.stringify(persons[j]))
    }
  }
  }
  else if (/\/user\/[a-zA-z]+\/withdraw\/[0-9]+/.test(request.url) && request.method==='POST'){
    const splits=request.url.split('/');
    const name=splits[splits.length-3];
    const money=Number(splits[splits.length-1]);
    for (let i=0;i<persons.length;i++){
      if (persons[i].name==name)
      {
        if(persons[i].balance>=money){
          persons[i].balance-=money
          response.end(JSON.stringify(persons[i]))
        }
        else{
          response.end('low balance')
        }
      }
    }
  }
  else if(/\/user\/new\/[a-zA-z]+/.test(request.url) && request.method==='POST'){
    const splits=request.url.split('/');
    const username=splits[splits.length-1];
    const currentindex=persons.length;
    const newuser={
       id:currentindex+1,
       name:username,
       balance:0
    }
    persons.push(newuser)
    response.end(JSON.stringify(persons))
  }
  else{
    response.end('hi');
  }
}).listen(3000,()=>{console.log('listening')});