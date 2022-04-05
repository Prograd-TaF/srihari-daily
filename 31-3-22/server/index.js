const WebSocket=require('ws')
const wss=new WebSocket.Server({port:8080})
wss.on("connection",ws=>{
    console.log("new client is added");
    ws.on("message",data=>{
        console.log(`something data is recived:${data}`);
        const info=JSON.parse(data);
        info.forEach(element => {
            element.greet=`hello ${element.name}`
        });
        
        ws.send(JSON.stringify(info));
        
    
    })
    ws.on("close",()=>{
        console.log("client is disconnected");
    })
})