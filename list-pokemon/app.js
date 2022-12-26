const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function listPokemon(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const cardContainer = document.querySelector(".card-container");
    for(let item of data){
        const card = document.createElement('div');
        card.className = "card";
        const cardHead = document.createElement('div');
        cardHead.className = "card-head";
        const title = document.createElement('h1');
    }
}

function renderPokemon(data){
    const card = document.querySelector("#card");
    card.className ="card";
    document.querySelector(".poke-name").innerText = data.name;
    document.querySelector(".img-container").innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" />`;
    document.querySelector("#poke-height").innerText = `${data.height/10}m`;
    document.querySelector("#poke-weight").innerText = `${data.weight/10}Kg`;
    document.querySelector("#poke-exp").innerText = `${data.base_experience}xp`
    const abilityList = document.querySelector("#ability-list");
    abilityList.innerHTML = "";
    for(let item of data.abilities){
        let newAbility = document.createElement("li");
        let ability = item.ability.name.replaceAll("-", " ");
        newAbility.innerText = `${ability}`;
        abilityList.appendChild(newAbility);
    }
    const typesList = document.querySelector("#types");
    typesList.innerHTML = "";
    card.classList.add(`card-${data.types[0].type.name}`);
    for(let item of data.types){
        let newType = document.createElement("p");
        newType.className = "poke-type";
        let type = item.type.name.replaceAll("-", " ");
        newType.innerText = type;
        typesList.appendChild(newType);
    }
    const movesList = document.querySelector('#moves-container');
    movesList.innerHTML = "";
    for(let item of data.moves){
        let newMove = document.createElement("li");
        let move = item.move.name.replaceAll("-", " ");
        newMove.innerText = `${move}`;
        movesList.appendChild(newMove);
    }
}

async function getPokemon(pokemon){
    const response = await fetch(`${BASE_URL}${pokemon}`);
    const data = await response.json();
    renderPokemon(data);
}

document.querySelector('#search').addEventListener('submit', (event) => {
    event.preventDefault();
    const search = document.querySelector("#search-in").value.toLowerCase();
    getPokemon(search);
});

document.querySelector("#random-poke").addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random()*906);
    getPokemon(randomNumber);
});