let users = [
    {surname: "Belmondo", firstname:"Britney", age: 34},
    {surname: "Taylor", firstname:"StClaire", age: 64},
    {surname: "Sweet", firstname:"Jessica", age: 44},
    {surname: "Demarco", firstname:"Sandra", age: 36},
    {surname: "Summer", firstname:"Barbara", age: 30}
    
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html
    parent.appendChild(td);
};

    let createButtonGroup= parent => {
    let group= document.createElement("div");
    group.className ="btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-info";
    btnInfo.innerHTML = "btn-info"

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = "btn-danger"


    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
    
}



for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr)
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr)
    tableBody.appendChild(tr);
}


 