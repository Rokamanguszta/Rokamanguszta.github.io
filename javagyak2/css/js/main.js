function calcAmount() {
let amountInput =document.querySelector("input[name='amount-Input']");
let price = 1000;
let showAmount=document.querySelector("span.show-Amount");
amount= parseInt(amountInput.value)* price;    
showAmount.innerHTML=amount;
}



