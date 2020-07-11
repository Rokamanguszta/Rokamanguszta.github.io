function calcAmount() {
let price = 50;
let amountInput = document.querySelector("input[name='amountInput']");
let amountNumber = parseInt(amountInput.value)

amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

showSumPrice(price, amountNumber);


}

function showSumPrice(price=50, amountNumber=1) {
    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber < 1) {
        alert("Minimum of 1 product!");
    }
    
    else if (amountNumber > 10) {
        alert("Maximum 10 products!");

    }else{
        let amount = amountNumber*price;
        showAmount.innerHTML= amount;
    }
}


let helpText = document.createElement("small");
helpText.className = "form-text text-muted"
helpText.innerHTML = "Please enter product name!"
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);




let sendButton = document.querySelector("form .btn.btn-primary");

/*sendButton.onclick = function() {
    alert("Szaszi!")
 } */

/*
sendButton.addEventListener("click", function() {
    alert("Szaszi!");
});
*/
window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth)
});



let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        
    }
    console.log( values );
});
    

    
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']")
for (let i=0; i<alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", function(ev) {
        console.log(ev), this.parentElement.style.display="none";
    });
}

let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display= "none";
}

let products = [
    "-",
    "Mega whey Protein",
    "100% ultra whey",
    "Ultra whey for him",
    "Ultra whey for her",
    "Slim whey",
    "Vega Protein mix",
    "Amino Boost Complex",
    "Milk & Egg Super Blend",
    "Nature's power Multivitamin",
    "Power of the Earth Trace Mineral Complex",
    "Flexibility Joint Complex",
    "Beautifull Essential Mineral Complex",
    "Nature's Gift Hawthorne and Gingko biloba Capsules",
    "Ashwagandha and Maca for him and her",
    'Mega Ginseng for high energy and vitality',
    'Ultra Relax-Essential herbal oil mix'

];

let productSelect = document.querySelector("#topInput");
let index = 0;
while (index < products.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = products[index];
    productSelect.appendChild(option);
    index++;

}