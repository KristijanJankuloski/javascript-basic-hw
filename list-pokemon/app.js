import { createCard } from "./cardConstructor.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let currentPage = 1;

async function listPokemon(page=1){
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";
    for(let i=(page*20-19);i<=(page*20);i++){
        const response = await fetch(`${BASE_URL}${i}`);
        const item = await response.json();
        cardContainer.appendChild(createCard(item));
    }
}

async function findPokemon(pokemon){
    const response = await fetch(`${BASE_URL}${pokemon}`);
    const data = await response.json();
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";
    cardContainer.appendChild(createCard(data));
}

// EVENT LISTENERS
document.getElementById("prevPage").addEventListener('click', ()=>{
    if(currentPage-1 <= 0){
        alert("You are on the first page");
        return;
    }
    listPokemon(--currentPage);
});
document.getElementById("nextPage").addEventListener('click', ()=>{
    if(currentPage+1 > 45){
        alert("You are on the first page");
        return;
    }
    listPokemon(++currentPage);
});
document.getElementById("search").addEventListener('submit', (event)=>{
    event.preventDefault();
    const search = document.querySelector("#search-in").value.toLowerCase();
    findPokemon(search);
});

listPokemon(currentPage);