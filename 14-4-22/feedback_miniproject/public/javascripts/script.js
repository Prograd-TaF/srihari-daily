var dish=document.getElementById('dish');
var getdish=document.getElementById('get');
var des=document.getElementById('recipedes')
var formData=JSON.parse(localStorage.getItem('formData')) || [];
var menuList=document.getElementById('navbar')
menuList.style.maxHeight="0px"
console.log('hello');
function togglemenu(){
  if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="130px";
  }
  else{
    menuList.style.maxHeight="0px";
  }
}
function save(){
  
   var username=document.getElementById('uname1')
   var password=document.getElementById('pass1')
   
   
   if(username.value.trim()==""){
     alert('hi');
     username.style.border="solid red 2px";
     return false
   }
   else if(username.value.trim().length<4){
    username.style.border="solid red 2px";
    alert('username length should be greater than 3');
    return false
   }
   else if(password.value.trim()==""){
    
    password.style.border="solid red 2px";
    return false
   }
   else if(password.value.trim().length<5){
    
    password.style.border="solid red 2px";
    alert('password length should be greater than 4');
    return false

   }
   
   else{
    formData.push({
      name:username.value,
      pass:password.value
    });
    localStorage.setItem('formData',JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
     return true
   }
}
function check(){
    
    //var savedName=localStorage.getItem('name');
    //var savedPass=localStorage.getItem('pass');
    var enteredName=document.getElementById('uname')
    var enteredPass=document.getElementById('pass')
    var exist=formData.length && JSON.parse(localStorage.getItem('formData')).some(data=> data.name==enteredName.value && data.pass==enteredPass.value);
    if(exist)
     {
       return true
     }
    else
     {
      alert('wrong details') 
      return false
     }
    
}


getdish.addEventListener('click',function(){
     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+dish.value)
     .then(response=>response.json())
     .then(data=>{
         console.log(data)
         recipeProcess(data.meals[0])
     })
     .catch(err =>alert("err")) 
})
function recipeProcess(recipes){
    const ingredients = [];
    for(i=1;i<=20;i++){
        if(recipes[`strIngredient${i}`]){
            ingredients.push(`${recipes[`strIngredient${i}`]} - ${recipes[`strMeasure${i}`]}`)
        }
        else{
            break;
        }
    }
    
    des.innerHTML= `
        <div id="image">
          <h3 id="heading">${recipes.strMeal}</h3>
          <img id="image1" src="${recipes.strMealThumb}" alt="${recipes.strMeal}.img"/>
          
        </div>
        <div id="ingre">
          <h3>Ingredients</h3>
          <ul>
          ${ingredients.map(ingredient => `
                <li>${ingredient}</li>`
                ).join('')}
          </ul>
        </div>
        <br>
        <div id="process">
          <h3>Instructions</h3>
          <p>${recipes.strInstructions}</p>
        </div>
        <div id="video">
        <h3>video</h3>
        <iframe  width:"900" height:"458" src="https://www.youtube.com/embed/${recipes.strYoutube.slice(-11)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
        </div>
        `;
}
function togglemenu(){
  let nav=document.getElementById('navbar');
  alert('hi');
  if (nav.className=="mynavbar"){
    nav.className+='responsive';
  }
  else{
    nav.className='mynavbar';
  }
}
function delay(){
  var delay_popup=8000;
  setTimeout("document.getElementById('popup1').style.display='block'",delay_popup);
}
var x=document.getElementById('ww').getAttribute('a');
if(x==='a'){
  delay()
}
//var delay_popup=5000;
//setTimeout("document.getElementById('popup1').style.display='block'",delay_popup);
//setTimeout("document.getElementById('popup2').style.display='block'",delay_popup);
function like(){
  document.getElementById('popup1').style.display='none';
  document.getElementById('popup2').style.display='block';
}
function dislike(){
  document.getElementById('popup1').style.display='none';
  document.getElementById('popup3').style.display='block';
}
function userInfo(){
  document.getElementById('popup2').style.display='none';
  document.getElementById('popup3').style.display='none';
  document.getElementById('popup4').style.display='block';
}
function feedback(){
 // console.log('hi');
  var name=document.getElementById('fname');
  var email=document.getElementById('femail');
  var custmor_feedback=document.getElementById('FEEDBACK');
  console.log(name.value);
  console.log(email.value);
  console.log(custmor_feedback.value);
}
//console.log('hello');*/
function removeall(){
  document.getElementById('popup4').style.display='none';
  document.getElementById('popup3').style.display='none';
  document.getElementById('popup2').style.display='none';
  document.getElementById('popup1').style.display='none';
  feedback();
}


