
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket választhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket válasszon!");
    } else {
    
    let amount = amountNumber * price;

    showAmount.innerHTML = amount;
    }
}





    



    




/*let sendButton= document.querySelector("form .btn.btn-primary");
sendButton.onclick= calcAmount;
 

sendButton.addEventListener("click", function() {
    alert("Hello JS");
});
window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
}); */





let orderForm=document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i  = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values );
});

let alertCloseButtons= document.querySelectorAll("close[data-dismiss='alert']");

for (let i=0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", function(ev) {
        this.parentElemant.style.display= "none"
    });
}

//Select elem kitöltése.

let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}