
/* ------------------------------------------------All input field-------------------------------------------  */
function getInputs(getId){
    const input = document.getElementById(getId);
    const value = parseInt(input.value);
    input.value = ' '
    return value;

};
/* ------------------------------------------------Total Expenses--------------------------------------------- */
function getupdateBalance(getTotalId, total){
    const updatefield = document.getElementById(getTotalId);
    updatefield.innerText = total;  
};
/* -------------------------------------------------Balance------------------------------------------------------ */
function getBalance(balance, income, total){
const getBalancefield = document.getElementById(balance);
getBalancefield.innerText = income - total;
};
/* --------------------------------------calculate-balance andexpenses---------------------------------------------- */
document.getElementById('calculate-button').addEventListener('click', function(){
const income = getInputs('income-input')
const rent = getInputs('rent-input')
const food = getInputs('food-input') 
const clothe = getInputs('clothe-input')
const total = rent + food + clothe;

if(total && income > 0){
    getupdateBalance('totalExpenses', total);


    getBalance('balance', income, total,);
    saveGetBalance('balance', income, total); 
}
else{
    alert('number de vai')
}
});
/* ----------------------------------------save amount - get balance------------------------------------------------ */
function saveGetBalance(balance, income, total){
document.getElementById(balance);
getTheBalanceUpdateField = income - total;
 return getTheBalanceUpdateField; 
}
/* ---------------------------------------saving amount and remaining balance---------------------------------------- */
document.getElementById('save-button').addEventListener('click', function(){
const inputer = getInputs('save-input');
   if(inputer > 0){
    const save = getTheBalanceUpdateField /  inputer;
   const showTheSavingAmount = document.getElementById('saving-amount');
   showTheSavingAmount.innerText = save; 
   const remaningBalance = document.getElementById('remaining-balance');
   const updateRemaningBalance = getTheBalanceUpdateField - save
   remaningBalance.innerText = updateRemaningBalance;
   }
   else{
    alert("kire number de!!")
   }
});