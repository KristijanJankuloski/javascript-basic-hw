let ingredients = [];

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

document.getElementById("name").addEventListener("input", printRec)
document.getElementById("submit").addEventListener("click", printRec);
document.getElementById("addIng").addEventListener("click", function(){
    let ingContainer = document.getElementById("ingContainer");
    let newIng = document.createElement('input');
    newIng.type = "text";
    newIng.className = "ingredients";
    newIng.addEventListener("input", printRec);
    ingContainer.appendChild(newIng); 
});