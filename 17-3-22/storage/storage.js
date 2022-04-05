var user=document.getElementById('name');
var arr=JSON.parse(localStorage.getItem('arr')) || [];
let ind=0;
function setlocal(){
    localStorage.setItem('name'+ind.toString(),user.value);
    ind+=1;
}
function getlocal(){
    
    alert(localStorage.getItem('name'+ind.toString()));
}
function deletelocal(){
    
    localStorage.removeItem('name'+ind.toString());
}
function clearlocal(){
    for(let i=ind;i>=0;i--){
    console.log(localStorage.clear('name'+i.toString()));
    }
}