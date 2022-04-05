var dish=document.getElementById('dish');
var getdish=document.getElementById('get');
var des=document.getElementById('recipedes')
var formData=JSON.parse(localStorage.getItem('formData')) || [];
var menuList=document.getElementById('navbar')
menuList.style.maxHeight="0px"
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


