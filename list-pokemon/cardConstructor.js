// HEAD
function createCardHead(item){
    const cardHead = document.createElement('div');
    cardHead.className = "card-head";
    // title
    const title = document.createElement('h1');
    title.className = "poke-name";
    title.innerText = item.name;
    cardHead.appendChild(title);
    // img
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    const img = document.createElement("img");
    img.src = `${item.sprites.front_default}`;
    img.alt = `${item.name}`;
    imgContainer.appendChild(img);
    cardHead.appendChild(imgContainer);
    // types
    const typesCont = document.createElement("div");
    typesCont.className = "types-container";
    const typesTitle = document.createElement("h4");
    typesTitle.innerText = "Types:";
    typesCont.appendChild(typesTitle);
    const typesList = document.createElement("div");
    typesList.className = "types";
    for(let typ of item.types){
        const newType = document.createElement("p");
        newType.className = "poke-type";
        let type = typ.type.name.replaceAll("-", " ");
        newType.innerText = type;
        typesList.appendChild(newType);
    }
    typesCont.appendChild(typesList);
    cardHead.appendChild(typesCont);
    return cardHead;
}

// BODY
function createCardBody(item){
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    // base stats
    const statsCont = document.createElement("div");
    statsCont.className = "base-stats";
    const statsTitle = document.createElement("h3");
    statsTitle.innerText = "Base Stats:";
    statsCont.appendChild(statsTitle);
    const statsHeight = document.createElement("p");
    statsHeight.className = "height";
    statsHeight.innerText = `Height: ${item.height/10}m`;
    statsCont.appendChild(statsHeight);
    const statsWeight = document.createElement("p");
    statsWeight.className = "weight";
    statsWeight.innerText = `Weight: ${item.weight/10}Kg`;
    statsCont.appendChild(statsWeight);
    const statsXp = document.createElement("p");
    statsXp.className = "exp";
    statsXp.innerText = `Base experience: ${item.base_experience}xp`;
    statsCont.appendChild(statsXp);
    cardBody.appendChild(statsCont);
    // abilities
    const abilityCont = document.createElement("div");
    abilityCont.className = "abilities";
    const abilityTitle = document.createElement("h3");
    abilityTitle.className = "ability-title";
    abilityTitle.innerText = "Abilities:";
    abilityCont.appendChild(abilityTitle);
    const abilityList = document.createElement("ul");
    abilityList.className = "ability-list";
    for(let abil of item.abilities){
        let newAbility = document.createElement("li");
        let ability = abil.ability.name.replaceAll("-", " ");
        newAbility.innerText = `${ability}`;
        abilityList.appendChild(newAbility);
    }
    abilityCont.appendChild(abilityList);
    cardBody.appendChild(abilityCont);
    return cardBody;
}

// FOOTER
function createCardFooter(item){
    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    const movesTitle = document.createElement("h3");
    movesTitle.innerText = "Moves:";
    cardFooter.appendChild(movesTitle);
    const moveList = document.createElement("ul");
    moveList.className = "moves-container";
    for(let move of item.moves){
        const newMove = document.createElement("li");
        let moveText = move.move.name.replaceAll("-", " ");
        newMove.innerText = `${moveText}`;
        moveList.appendChild(newMove);
    }
    cardFooter.appendChild(moveList);
    return cardFooter;
}

function createCard(item){
    const card = document.createElement('div');
    card.className = "card";
    card.classList.add(`card-${item.types[0].type.name}`);
    card.appendChild(createCardHead(item));
    card.appendChild(createCardBody(item));
    card.appendChild(createCardFooter(item));
    return card;
}

export { createCard };