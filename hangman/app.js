const categories = {
    movies: ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "The Lord of the Rings", "Pulp Fiction", "Star Wars", "Inception", "Forrest Gump", "Fight Club", "The Matrix", "One Flew Over the Cuckoo's Nest", "The Silence of the Lambs", "Interstellar", "Saving Private Ryan", "The Green Mile", "Back to the Future", "Spirited Away", "The Lion King", "The Usual Suspects", "Whiplash"],
    shows: ["Game of Thrones", "House of the Dragon", "House of Cards", "The Simpsons", "South Park", "Friends", "How I Met Your Mother", "Daredevil", "Stranger Things", "The Crown"],
    games: ["Minecraft", "League of Legends", "Animal Crossing: New Horizons", "Mortal Kombat", "Valorant", "Counter Strike Global Offensive", "Dark Souls", "Elden Ring", "Batman: Arkham City", "Tomb Raider"],
    cities: ["New York", "Skopje", "Paris", "Berlin", "Los Angeles", "Bitola", "Ohrid", "Tokyo", "Seoul", "London", "Belgrade", "Sarajevo", "Frankfurt", "Bern", "Zurich", "Sidney", "Las Vegas", "San Diego", "Anchorage", "Istanbul", "Osaka", "Kumanovo", "Dallas"],
    music: []
}
let secretWord = "";
let lives = 10;
let field = "";

function getRandomItemFromCategory(category) {
    let index = Math.floor(Math.random()*categories[category].length);
    return categories[category][index];
}

function startGame(category, catDisplay){
    secretWord = getRandomItemFromCategory(category);
    lives = 10;
    const wordArea = document.querySelector(".word-area");
    wordArea.innerHTML = "";
    const catTitle = document.createElement("h3");
    wordArea.appendChild(catTitle);
    catTitle.className = "category";
    catTitle.innerText = `The chosen category is ${catDisplay}`;
    field = secretWord.split(" ");
    for(let i=0; i<field.length;i++){
        field[i] = field[i].replace(/\D/g, '_');
    }
    field = field.join(" ");
    const wordField = document.createElement("h2");
    wordField.className = "word-field";
    wordField.innerText = `${field}`;
    wordArea.appendChild(wordField);
}

function checkForLetter(letter){
    document.querySelector(`#btn-${letter}`).disabled = true;
}

// EVENT LISTENERS
const categoryButtons = document.querySelectorAll(".catBtn");
for(let btn of categoryButtons){
    btn.addEventListener('click', () => {
        startGame(btn.value, btn.innerText);
    });
}
document.querySelector("#restart").addEventListener('click', ()=>{
    location.reload();
});

const alphBtns = document.querySelectorAll(".alph-btn");
for(let btn of alphBtns){
    btn.addEventListener('click', ()=>{
        checkForLetter(btn.innerText.toLowerCase());
    });
}