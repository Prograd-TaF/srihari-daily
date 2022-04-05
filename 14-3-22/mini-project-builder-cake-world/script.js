/*Fill your code */

let k=0;
function layers1(){
        
        var ch=document.createElement("p");
        var text=document.createTextNode("chocklate----300");
        ch.appendChild(text);
        var element=document.querySelector(".bill");
        
        element.appendChild(ch);
        let total=document.getElementById("totals");
        total.textContent=Number(total.textContent)+300;
        k=k+1;
        layer(k);
}
function layers2(){
        
    var ch1=document.createElement("p");
    var text1=document.createTextNode("Strawberry----100")
    ch1.appendChild(text1);
    var element1=document.getElementsByClassName("bill")[0];
    element1.appendChild(ch1);
    let total=document.getElementById("totals");
    total.textContent=Number(total.textContent)+100;
    k=k+1;
    layer(k);
}
function layers3(){
        
    var ch2=document.createElement("p");
    var text2=document.createTextNode("Butterscoth----150")
    ch2.appendChild(text2);
    var element2=document.getElementsByClassName("bill")[0];
    element2.appendChild(ch2);
    let total=document.getElementById("totals");
    total.textContent=Number(total.textContent)+150;
    k=k+1;
    layer(k);
}
function layers4(){
        
    var ch3=document.createElement("p");
    var text3=document.createTextNode("Vannelia----200")
    ch3.appendChild(text3);
    var element3=document.getElementsByClassName("bill")[0];
    element3.appendChild(ch3);
    let total=document.getElementById("totals");
    total.textContent=Number(total.textContent)+200;
    k=k+1;
    layer(k);
}
function layers5(){
        
    var ch4=document.createElement("p");
    var text4=document.createTextNode("Redvelvet---350")
    ch4.appendChild(text4);
    var element4=document.getElementsByClassName("bill")[0];
    element4.appendChild(ch4);
    let total=document.getElementById("totals");
    total.textContent=Number(total.textContent)+350;
    k=k+1;
    layer(k);
}


    
function layer(k){
    let ele=document.getElementById("layer"+String(k));
    ele.style.visibility='visible';
}



