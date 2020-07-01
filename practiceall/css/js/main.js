function calcAmount() {
let price=10;
let amountInput=document.querySelector("input[name='amount-Input']");
let showAmount=document.querySelector("span.show-amount")
let amountNumber=parseInt(amountInput.value);

amountNumber=isNaN(amountNumber) ? 0:amountNumber;


if (isNaN(amountNumber)) {
    amountNumber=0;
}
if (amountNumber > 10) {
    alert("Choose maximum 10 products!");
    return;
}
else if (amountNumber<1) {
    alert("Choose mimimum 1 product!")
    return;
}

let amount=parseInt(amountInput.value)*price;
showAmount.innerHTML=amount;
}
