
function myFunction() {
    let arr = window.prompt("enter to-do");
    document.getElementById("enter").innerHTML =arr;
    }
function deletes() {
    let k= document.getElementById("enter");
    k.remove();
        
        
}
function cross() {
    let l= document.getElementById("enter");
    let result="<del>" +l+ "</del>";
    document.getElementById("cr").innerHTML=result;
                
    }