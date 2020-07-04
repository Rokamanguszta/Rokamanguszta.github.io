function calcAmount() {
let price = 50;
let amountInput = document.querySelector("input[name='amountInput']");
let showAmount = document.querySelector("span.show-amount")
let amountNumber = parseInt(amountInput.value)

amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

if (isNaN(amountNumber)) {
    amountNumber = 0;
}

if (amountNumber < 1) {
    alert("Minimum of 1 product!");
    return;
}

else if (amountNumber > 10) {
    alert("Maximum 10 products!");
    return;
}

else {
    let amount = parseInt(amountInput.value) * price;
showAmount.innerHTML = amount 
}

}


