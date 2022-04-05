var http=require('http');
var url=require('url');
var recipe=[
    {
        id:0,
        strInstructions: "Grind the cashew, poppy seeds and cumin seeds into a smooth paste, using as little water as possible. Set aside. \r↵\r↵Deep fry the slice…",
        strMeal: "Lamb Biryani"
    },
    {
        id:1,
        strInstructions: "01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minute…",
        strMeal: "Fish pie"
    },
    {
        id:2,
        strInstructions: "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.…",
        strMeal: "Dal fry"
    },

]
const server=http.createServer();
server.on('request',(request,response)=>{
    //get all
    if(request.url==='/' && request.method==="GET"){
        response.writeHead(200,{"content-Type":"application/json"});
        response.end(JSON.stringify(recipe));
    }
    else if(/\/[0-9]+/.test(request.url) && request.method==="GET"){
        response.writeHead(200,{"content-Type":"application/json"});
        const adress=request.url.split('/');
        const id=Number(adress[adress.length-1]);
        
        response.end(JSON.stringify(recipe.find((recipes)=>recipes.id===id)));
    }
    else if(/\/delete\/[0-9]+/.test(request.url) && request.method==="DELETE"){
        response.writeHead(200,{"content-Type":"application/json"});
        const del=request.url.split('/');
        const index=Number(adress[adress.length-1]);
        //var ab=delete recipe[index];
        //response.end(JSON.stringify(ab));
        //response.end(JSON.stringify(recipe));
        const recipes = recipe.find(recipes => recipes.id == index);
        recipe= recipes.filter(recipes => recipes.id !== index);
        //response.setHeader('Content-Type','application/json');
        response.end(JSON.stringify(recipe))
        
    
    }
    else if(request.url === "/post/new" && request.method === "POST") {
        let body = ''
        request.on('data', (data) => {
            body += data;
        })
        request.on('end', () => {
            const newUser = { id: recipe.length+1, ...JSON.parse(body)}
            recipe.push(newUser)
            response.end(JSON.stringify(newUser))
        })  
    }
    else if(/\/post\/[0-9]+/.test(request.url) && request.method === "PUT"){
        
            /*let body = '';
            request.on('data',(dataUpdate)=>{
            body += dataUpdate;
            });
            request.on('end',()=>{
                body = JSON.parse(body);
                recipe.push({id:recipe.length,...body});
                response.setHeader('Content-Type','application/json');
                response.end(JSON.stringify(recipe[recipe.length - 1]));
                
            });*/
            const path = request.url.split('/');
            const id = Number(path[path.length - 1]);
            const newList = [];
            posts.forEach(post =>{
            if(recipe.id == id){
            
                let body = '';
                request.on('data',(dataChunk)=>{
                    body += dataChunk;
                });
                request.on('end',()=>{
                    body = JSON.parse(body);
                    recipe.strInstructions= body.strInstructions;
                    recipe.strMeal = body.strMeal;
                });
        }
    });
}).listen(3000);
