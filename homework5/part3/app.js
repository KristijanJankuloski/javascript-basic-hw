let form = document.getElementById("form");
let ingContainer = document.getElementById("ingContainer");
let ingredients = [];
ingContainer.innerHTML = "";

function addIngredient(){
    let newIng = document.createElement('input');
    newIng.type = "text";
    newIng.className = "ingredients";
    ingContainer.appendChild(newIng);
}

function printRec(){
    ingredients = [];
    let name = document.getElementById("name").value;
    let ingDisplay = document.getElementById("ingPrint");
    document.getElementById("title").innerText = name.toLowerCase();
    inputIngs = document.getElementsByClassName("ingredients");
    for(let item of inputIngs){
        if(item.value !== ""){
            ingredients.push(item.value.toLowerCase());
        }
    }
    ingDisplay.innerHTML = "";
    for(let item of ingredients){
        ingDisplay.innerHTML += `<li>${item}</li>`;
    }
}