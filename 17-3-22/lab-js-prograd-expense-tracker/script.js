
document.querySelector("#addTransaction").addEventListener('click',addTransaction);

function addTransaction(event){
    event.preventDefault();
    const input = document.querySelector("#text");
    const amount = document.querySelector("#amount");
    
    if(amount == 0) return;

    if(Number(amount.value) >= 0) calculateIncome(amount.value);
    else calculateExpense(amount.value);

    localStorage.setItem(input.value,`${amount.value}`);
    input.value = "";
    amount.value = "";
    checkAll();
}



function calculateIncome(amount){
    const value = localStorage.getItem("income");
    const newIncome = Number(amount) + Number(value);
    localStorage.setItem("income",`${newIncome}`);
    const incomeDisplay = document.querySelector("#money-plus");
    incomeDisplay.textContent = `+$${newIncome}`;
    calculateBalance();
}

function calculateExpense(amount){
    const expense = localStorage.getItem("expense");
    const newExpense = Number(amount) + Number(expense);
    localStorage.setItem("expense",`${newExpense}`);
    const expenseDisplay = document.querySelector("#money-minus");
    expenseDisplay.textContent = `-$${Math.abs(newExpense)}`;
    calculateBalance()
}

function calculateBalance(){
    const balanceDisplay = document.querySelector("#balance");
    const income = localStorage.getItem("income");
    const expense = localStorage.getItem("expense");
    if(Math.abs(Number(income)) >= Math.abs(Number(expense))) balanceDisplay.textContent = `+$${Number(income) + Number(expense)}`;
    else balanceDisplay.textContent = `-$${Math.abs(Number(expense) + Number(income))}`;
    checkCards();
}


// Renderers
function checkCards(){
    const list = document.querySelector("#list");
    list.innerHTML = "";
    for(let i = 0;i<localStorage.length;i++){
        const key = localStorage.key(i);
        const amount = localStorage.getItem(key);
        if(key == 'income' || key == 'expense')continue;
        const li = document.createElement("li");
        li.textContent = `${key} - $${Math.abs(Number(amount))}`
        if(Number(amount) >= 0)li.setAttribute("class",'plus');
        else li.setAttribute("class",'minus');
        list.appendChild(li);
    }
}

function checkAll(){
    calculateIncome(0);
    calculateExpense(0);
    calculateBalance();
    checkCards();
}

checkAll();
