const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function renderPokemon(data){
    document.querySelector(".poke-name").innerText = data.name;
    document.querySelector(".img-container").innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" />`;
    document.querySelector("#poke-height").innerText = `${data.height/10}m`;
    document.querySelector("#poke-weight").innerText = `${data.weight/10}Kg`;
    document.querySelector("#poke-exp").innerText = `${data.base_experience}xp`
    const abilityList = document.querySelector("#ability-list");
    for(let item of data.abilities){
        let newAbility = document.createElement("li");
        let ability = item.ability.name.replaceAll("-", " ");
        newAbility.innerText = `${ability}`;
        abilityList.appendChild(newAbility);
    }
    const typesList = document.querySelector("#types");
    for(let item of data.types){
        let newType = document.createElement("p");
        newType.className = "poke-type";
        let type = item.type.name.replaceAll("-", " ");
        newType.innerText = type;
        typesList.appendChild(newType);
    }
    const movesList = document.querySelector('#moves-container');
    for(let item of data.moves){
        let newMove = document.createElement("li");
        let move = item.move.name.replaceAll("-", " ");
        newMove.innerText = `${move}`;
        movesList.appendChild(newMove);
    }
}

document.querySelector('#search').addEventListener('submit', (event) => {
    event.preventDefault();
    const search = document.querySelector("#search-in").value.toLowerCase();
    fetch(`${BASE_URL}${search}`).then(response => response.json()).then(data => {
        renderPokemon(data);
    });
});

document.querySelector("#random-poke").addEventListener('click', () => {
    randomNumber = Math.floor(Math.random()*906);
    fetch(`${BASE_URL}${randomNumber}`).then(response => response.json()).then(data => {
        renderPokemon(data);
    });
});