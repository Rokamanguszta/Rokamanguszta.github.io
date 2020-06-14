function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-Input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value)

    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }
    
    if (amountNumber>10) {
        alert("Maximum 10 terméket vásárolhat!");
        return
    }
    else if (amountNumber<1) {
        alert("Minimum 1 terméket vásároljon!");

    }

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    let amount = parseInt(amountInput.value) * price;

    showAmount.innerHTML = amount;

}
