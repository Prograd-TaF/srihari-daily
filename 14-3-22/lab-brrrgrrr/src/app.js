// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger

var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  //Trial 1 - Change the visibility of Patty based on state by manipulating the DOM
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of Cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomoto = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomoto.style.display = "inherit";
  } else {
    tomoto.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  for(ele in state){
    let curr = document.querySelector(`.btn-${ele.toLowerCase()}`);
    if(state[ele]){
      if(!curr.classList.contains("active")){
        curr.classList.add("active");
      }
    }else{
      curr.classList.remove("active");
    }
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  let inger = document.querySelectorAll(".items");
  inger.forEach(ele => ele.style.visibility = "hidden");
  for(ele in state){
    if(state[ele]){
      inger.forEach(inger =>{
        if(inger.textContent.toLowerCase() == ele.toLowerCase()){
          inger.style.visibility = "visible"
        }
      })
    }
  }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  let amount = 2 * wholeWheatBun;
  for(ele in ingredients){
    if(state[ele]){
      amount=amount+ingredients[ele]; 
    }
  };
  document.querySelector(".price-details").textContent = `INR ${amount}`;
}
