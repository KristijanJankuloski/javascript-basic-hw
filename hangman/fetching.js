let categories = {};
fetch("http://localhost:3000/").then(response => {
  return response.json();
}).then(data => {
  categories = data;
});

let secretWord = {};
let missed = 0;
let field = "";

function getRandomItemFromCategory(category) {
    let index = Math.floor(Math.random()*categories[category].length);
    return categories[category][index];
}

function startGame(category, catDisplay){
    secretWord = getRandomItemFromCategory(category);
    missed = 0;
    const wordArea = document.querySelector(".word-area");
    wordArea.innerHTML = "";
    const catTitle = document.createElement("h3");
    wordArea.appendChild(catTitle);
    catTitle.className = "category";
    catTitle.innerText = `The chosen category is ${catDisplay}`;
    field = secretWord.name.split(" ");
    for(let i=0; i<field.length;i++){
        let word = field[i].split("");
        for(let j=0; j<word.length;j++){
            if(word[j] === "'" || word[j] === "." || word[j] === ":" || word[j] === "/" || word[j] === "-"){
                continue;
            }
            word[j] = "_";
        }
        field[i] = word.join("");
        // field[i] = field[i].replace(/\D/g, '_');
    }
    field = field.join(" ");
    const wordField = document.createElement("h2");
    wordField.className = "word-field";
    wordField.innerText = `${field}`;
    wordArea.appendChild(wordField);
}

function checkForLetter(letter){
    document.querySelector(`#btn-${letter.toLowerCase()}`).disabled = true;
    const testSecret = secretWord.name.split("");
    const newField = field.split("");
    let letterFound = false;
    for(let index in testSecret){
        if(letter === testSecret[index].toUpperCase()){
            newField[index] = letter;
            letterFound = true;
        }
    }
    if(!letterFound){
        missedLetter();
        return;
    }
    field = newField.join("")
    document.querySelector(".word-field").innerText = newField.join("");
    if(field === secretWord.name.toUpperCase()){
        document.querySelector(".category").innerText = "Congratulations you have won!";
        secretWord = {};
    }
}


function missedLetter(){
    if(missed === 10){
        document.querySelector(".main-container").style.backgroundColor = "var(--color-danger)";
        for(let item of document.querySelectorAll(".btn")){
            item.style.backgroundColor = "var(--color-danger)";
        }
        const category = document.querySelector(".category");
        category.innerText = `You've lost the term was:`;
        document.querySelector('.word-field').innerText = `${secretWord.name}`;
        for(let btn of document.querySelectorAll(".alph-btn")){
            btn.disabled = true;
        }
        secretWord = {};
        return;
    }
    missed++;
    const hangman = document.querySelectorAll(".hangman");
    for(let index = 0; index < missed; index++){
        hangman[index].style.opacity = 100;
    }

}

// EVENT LISTENERS
const categoryButtons = document.querySelectorAll(".catBtn");
for(let btn of categoryButtons){
    btn.addEventListener('click', () => {
        startGame(btn.value, btn.innerText);
    });
}
document.querySelector("#hint").addEventListener('click', ()=>{
    document.querySelector(".hint").innerText = `Your Hint: ${secretWord.hint}`
});

document.querySelector("#restart").addEventListener('click', ()=>{
    location.reload();
});

const alphBtns = document.querySelectorAll(".alph-btn");
for(let btn of alphBtns){
    btn.addEventListener('click', ()=>{
        checkForLetter(btn.innerText);
    });
}

window.addEventListener('keypress', (event) => {
    checkForLetter(event.key.toUpperCase());
});