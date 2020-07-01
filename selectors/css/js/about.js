let users = [
    (surname: "Berger", firstname: "Whitney", age: 22 )
    (surname: "Nagy", firstname: "Árpád", age: 32 )
    (surname: "Kis", firstname: "István", age: 52 )
    (surname: "John", firstname: "Whitney", age: 22 )
    (surname: "Paul", firstname: "Whitney", age: 42 )
    (surname: "Berger", firstname: "Lindsay", age: 25 )
];

let tr= document.querySelector("#userTable tbody");

let createTD= (html, parent) => {
    let td= createElement ("td")
    td.innerHTML=html;
    parent.appendChild(td);
}
let group = document.createElement("div")
group.className= "btn-group";

let btnInfo = document.createElement("button");
btnInfo.className= "btn-info btn";
btnInfo.innerHTML = "i class='fas fa-sync-alt'></i>";
let btnInfo = document.createElement("button");
btnInfo.className= "btn-info btn";
btnInfo.innerHTML = "i class='fas fa-sync-alt'></i>";
group.appendChild(btnInfo);
group.appendChild(btnDanger);
}

for (let k in users) {
    let tr= document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(user[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);

    tableBody.appendChild(tr);


}


